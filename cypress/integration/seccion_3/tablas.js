/// <reference types="Cypress" />
require('cypress-xpath')
describe("Elementos de una tabla", () => {

   
    it('Select tabla x children', () => {
        cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html')
        cy.title('eq','Selenium Easy - Table Data Filter Demo')

        cy.get('.btn-group').children('.btn-success').should('contain','Green').click({force:true})
        cy.get('.btn-group').children('.btn-danger').should('contain','Red').click({force:true})

    })

    it('Select tabla x EQ', () => {
        cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html')
        cy.title('eq','Selenium Easy - Table Data Filter Demo')

        cy.get('[type="button"]').eq(2).should('contain','Orange').click({force:true})
    })

    it('Select tabla x filter', () => {
        cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html')
        cy.title('eq','Selenium Easy - Table Data Filter Demo')

        cy.get('[type="button"]').filter('.btn-warning')
        cy.wait(1000)
        cy.get('[type="button"]').filter('.btn-success')
        cy.wait(1000)
        cy.get('[type="button"]').filter('.btn-success').click()
        cy.wait(1000)
        cy.get('[type="button"]').filter('.btn-warning').should('contain','Orange').click({force:true})
        cy.wait(1000)
    })

    it('Select tabla x find', () => {
        cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html')
        cy.title('eq','Selenium Easy - Table Data Filter Demo')

        cy.get('.btn-group').find('.btn-danger').should('contain','Red').click() 
    })

    it('Select tabla x first', () => {
        cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html')
        cy.title('eq','Selenium Easy - Table Data Filter Demo')

        cy.get('.btn-group').find('button').first().click()
        cy.get('.btn-group').find('button').last().click()
    })

    it('Select tabla x elementos siguientes NextAll', () => {
        cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html')
        cy.title('eq','Selenium Easy - Table Data Filter Demo')
        cy.get('[type="button"]').should('contain','Green')
        cy.get('[type="button"]').should('contain','Green').nextAll().should('have.length',4)
    })

    it('Select elemento padre y validarlo', () => {
        cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html')
        cy.title('eq','Selenium Easy - Table Data Filter Demo')
        cy.get('[type="button"]').parent().should('have.class','btn-group')
    })

    it('Reto Select all y click en todos los checkbox', () => {
        cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html')
        cy.title('eq','Selenium Easy - Table Data Filter Demo')

        cy.get('.btn-group').find('button').last().should('contain','All').click()
        cy.wait(1000)
        cy.get('.ckbox').should('have.length',5).click({multiple:true})
    })

    it.only('Reto for y assert', () => {
        cy.visit('https://demo.seleniumeasy.com/table-records-filter-demo.html')
        cy.title('eq','Selenium Easy - Table Data Filter Demo')

        for(let x=1; x<=4; x++){
            let nameButton = ""

            if(x==1){
                nameButton = "Green"
            }else if(x==2){
                nameButton = "Orange"
            }else if(x==3){
                nameButton = "Red"
            }else if(x==4){
                nameButton = "All"
            }

            cy.get('[type="button"]').eq(x).should('contain',nameButton)
            cy.get('[type="checkbox"]').check({force:true})
        }
    })

    it.only('Reto tablas each,then,for',() => {
        cy.visit('https://demo.seleniumeasy.com/table-sort-search-demo.html')

        const datos = [];

        cy.get('.odd td, .even td').each(($el,index,$list)=>{
            datos[index] = $el.text()
        }).then(()=>{
            for(let i=0; i<=datos.length; i++){
                cy.log(datos[i])
            }
        })
    })

    it.only('Reto tablas', () => {
        cy.visit('https://demo.seleniumeasy.com/table-sort-search-demo.html')

        const datos = [];
        let cantidadOdd = 0;

        cy.get('[role="row"] td').each(($el,index,$list)=>{
            datos[index] = $el.text()
        }).then(()=>{
            for(let i=0; i<=datos.length; i++){
                cy.log(datos[i])
                if(Number(datos[i])){
                    cantidadOdd += Number(datos[i]);
                }
            }
            cy.log('Cantidad total es: ' + cantidadOdd)
            expect(cantidadOdd).to.eq(394)
        })
    })


    it.only('Reto 3 tablas', () => {
        cy.visit('https://demo.seleniumeasy.com/table-sort-search-demo.html')

        const campo = cy.get('tbody > :nth-child(7) > :nth-child(2)')

        campo.each(($el,index,$list)=>{
            const datoPosition = $el.text()
            cy.log(datoPosition)

            if(datoPosition.includes('Javascript Developer')){
                campo.eq(index).next().next().then((age)=>{
                    const Edad = age.text()
                    cy.log(Edad)
                    cy.log('La edad de javascript dev es : ' + Edad)
                    expect(Edad).to.equal('39 ')
                })
            }
        })

        
    })
    

    
})