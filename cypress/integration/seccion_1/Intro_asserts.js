/// <reference types="Cypress" />
describe("Intro asserts", () => {
    it("Demo asserts", () => {
        cy.visit("https://demoqa.com/automation-practice-form/")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        cy.get('#firstName').should('be.visible').type("Naza")
        cy.get('#lastName').should('be.visible').type('DG')
        cy.get('#userEmail').should('be.visible').should("be.enabled").type('asd@gmail.com')
        
    })

})