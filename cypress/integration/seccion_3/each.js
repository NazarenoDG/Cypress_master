/// <reference types="Cypress" />
require('cypress-xpath')
describe("Funciones Each", () => {
    it("", () => {
        for(let i = 1; i <= 1000; i = i + 2 ){
            cy.log('Numero :' + i)
        }
    })

    it("Each uno", () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.title().should('eq','My Store')

        cy.get('.product-name').each(($el,index,$list) => {
            //cy.log($el.text())
            let vestido = $el.text()
            cy.log(vestido)
            
        })
    })

    it("Each dos", () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.title().should('eq','My Store')

        cy.get('.product-name').each(($el,index,$list) => {
            let vestido = $el.text()
            if(vestido.includes("Blouse")){
                cy.wrap($el).click()
                // con el wrap recorro todos elementos y cuando encuentre el que incluye "Blouse" click
            }
        })
    })

    it.only("Each tres reto", () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.title().should('eq','My Store')
        let t = 200
        cy.wait(t)

        //para saber cuantos array hay
        const datos = [];
        cy.get('#center_column .product-name').each(($el,index,$list)=>{
            datos[index] = $el.text()
        }).then(() => {
            // hasta Datos.lenght recorre todos los elementos
            for(let x=0; x<=datos.length; x++){
                cy.get('#center_column .product-name').eq(x).click({force:true})
                cy.wait(t)
                cy.get('#quantity_wanted').clear().type('2')
                cy.wait(t)
                cy.get('#group_1').select('M').should('have.value','2')
                cy.wait(t)
                cy.get('.exclusive > span').should('be.visible').click({force:true})
                cy.wait(t)
                cy.xpath("//span[normalize-space()='Proceed to checkout']").click({force:true})
                cy.wait(t)
                cy.get('.icon-home').should('be.visible').click({force:true})
            }
        })
    })

    

})