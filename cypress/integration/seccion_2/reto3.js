/// <reference types="Cypress" />

describe("Reto 3 asserts", () => {
    it("Test asserts web selenium", () => {
        cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html")
        cy.title().should('eq','Selenium Easy Demo - Simple Form to Automate using Selenium')

        let a = 35;
        let b = 20;
        cy.get('#at-cv-lightbox-close').should('be.visible').click({force:true})
        cy.get('#sum1').should('be.visible').and('have.class','form-control').type(a)
        cy.get('#sum2').should('be.visible').and('have.class','form-control').type(b)
        
        cy.contains("[type='button']","Get Total").click()

        cy.get('#displayvalue').should('be.visible').then((e)=>{
            let r = a + b;
            cy.log(e.text())
            let res = e.text()

            if(r==res){
                cy.log("Son iguales")
            }else{
                cy.log("Son distintos")
            }
            
            if(res > 50){
                a = a-10;
                b = b-10;
                cy.get('#sum1').should('be.visible').and('have.class','form-control').clear().type(a)
                cy.get('#sum2').should('be.visible').and('have.class','form-control').clear().type(b)  
                cy.contains("[type='button']","Get Total").click()
            }else{
                a = a+5;
                b = b+5;
                cy.get('#sum1').should('be.visible').and('have.class','form-control').clear().type(a)
                cy.get('#sum2').should('be.visible').and('have.class','form-control').clear().type(b)  
                cy.contains("[type='button']","Get Total").click()
            }

        })
    })


    it.only('Test with invoke',() => {
        cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html")
        cy.title().should('eq','Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.get('#at-cv-lightbox-close').should('be.visible').click({force:true})

        let a = 40
        let b = 20
        cy.get('#sum1').invoke('attr','placeholder').should('contain','Enter value').then(()=>{
            cy.get('#sum1').type(a).invoke('attr','style','color:blue')
        })
        cy.get('#sum2').invoke('attr','placeholder').should('contain','Enter value').then(()=>{
            cy.get('#sum2').type(b).invoke('attr','style','color:red')
        })
        cy.contains('[type="button"]',"Get Total").click()

        cy.get('#displayvalue').should('be.visible').then((e)=>{
            let r = a + b
            cy.log(e.text())
            let res = e.text()

            if(r==res){
                cy.log('Son iguales')
            }else{
                cy.log('Son distintos')
            }
            if(res > 50){
                a = a-20;
                b = b-10
                cy.get('#sum1').should('be.visible').and('have.class','form-control').clear().type(a)
                cy.get('#sum2').should('be.visible').and('have.class','form-control').clear().type(b)
                cy.contains("[type='button']","Get Total").click()
                cy.get('#displayvalue').should('be.visible').invoke('attr','style','color:green')
            }else{
                cy.get('#displayvalue').should('be.visible').invoke('attr','style','color:red')
            }
        })
    })

})