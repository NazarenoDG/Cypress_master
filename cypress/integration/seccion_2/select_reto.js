/// <reference types="Cypress" />
require('cypress-xpath')
describe("Reto select", () => {
    it("MultiSelect", () => {
        cy.visit("https://demoqa.com/select-menu")
        cy.title().should('eq','ToolsQA')

        cy.get('#cars').select(["Volvo","Saab"])
    })

})