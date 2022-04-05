/// <reference types="Cypress" />
require('cypress-xpath')

describe("Manejo de los alias", () => {
    it("Alias 1", () => {
        cy.visit("https://demo.seleniumeasy.com/input-form-demo.html")

        cy.xpath("//input[@placeholder='First Name']").should('be.visible').as('nam')
        cy.get("@nam").type('Naza')

        cy.xpath("//input[@placeholder='Last Name']").should('be.visible').as("ap")
        cy.get("@ap").type('Di grazia')


    
    })

})