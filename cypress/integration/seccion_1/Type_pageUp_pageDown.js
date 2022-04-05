/// <reference types="Cypress" />
describe("Ejemplo type pageUp,pageDown", () => {
    it("pageUp", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get('#userName').type('{pageup}')
        cy.wait(1000)
    })
    it.only("pageDown", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get('#userName').type('{pagedown}')
        cy.wait(1000)
    })

})