/// <reference types="Cypress" />

describe("Seccion 1 validando titulo", () => {
    it("Test validar titulo", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')

        cy.log("Ok la funcion title funciono bien")
    })

})