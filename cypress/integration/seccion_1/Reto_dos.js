/// <reference types="Cypress" />
require('cypress-xpath')
require('cypress-plugin-tab')
describe("Segundo reto", () => {
    it("Probando la aplicacion", () => {
        cy.visit("https://computer-database.gatling.io/computers")
        cy.title().should('eq','Computers database')
        cy.wait(1500)

        //busqueda
        cy.xpath("//input[@id='searchbox']").type('ASC')
        cy.get('#searchsubmit').should('be.visible').click()

        //add
        cy.get('#add').should('be.visible').click()
        cy.xpath("//input[@id='name']").should('be.visible').type('cypress')
        cy.xpath("//input[@id='introduced']").should('be.visible').type('2021-03-15').tab().type('2025-03-15')
        //combo
        cy.get('#company').should('be.visible').select('Nokia').should('have.value','16')
        cy.xpath("//input[@value='Create this computer']").should('be.visible').click()
        cy.get('.alert-message').should('be.visible').contains('Computer cypress has been created')
        //busqueda
        cy.xpath("//input[@id='searchbox']").type('cypress')
        cy.get('#searchsubmit').should('be.visible').click()


    })

})