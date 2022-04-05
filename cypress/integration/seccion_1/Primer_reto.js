/// <reference types="Cypress" />

require('cypress-plugin-tab')
describe("Primer reto", () => {
    it("", () => {
        cy.visit("https://demoqa.com/webtables/")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        //buscar un nombre
        cy.get("#searchBox").should('be.visible').type('Cierra')
        cy.wait(1500)
        cy.get("#searchBox").should('be.visible').clear()
        
        cy.get('#addNewRecordButton').should('be.visible').click()
        cy.wait(1000)
        //añadir un empleado a la tabla   
        cy.get('#firstName').should('be.visible').type('Nazareno').tab().
        type("DG").tab().
        type("naza@gmail.com").tab().
        type('21').tab().
        type('1000').tab().
        type('BS')
        cy.get('#submit').should('be.visible').click()
        //editar empleado de la tabla 
        cy.get('#searchBox').should('be.visible').type('Nazareno')
        cy.get('.rt-table').scrollTo('right') 
        cy.wait(2000)
        cy.get('#edit-record-4 > svg').should('be.visible').click()
        cy.get('#salary').clear().type('1500')
        cy.get('#department').clear().type('Sistemas')
        cy.get('#submit').should('be.visible').click()
        //borrar empleado agregado
        cy.wait(2000)
        cy.get('#delete-record-4 > svg').should('be.visible').click()




    })

})