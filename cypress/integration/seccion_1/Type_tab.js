/// <reference types="Cypress" />

require("cypress-plugin-tab")
describe("Ejemplo con Tab", () => {
    it("Type tab", () => {
        cy.visit("https://demoqa.com/automation-practice-form/")
        cy.title().should('eq','ToolsQA')

        cy.get("#firstName").type("Nazareno").tab().
        type("Di Grazia").tab().
        type("naza@gmail.com")
    })

})