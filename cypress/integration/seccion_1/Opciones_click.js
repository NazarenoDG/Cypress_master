/// <reference types="Cypress" />
describe("Opc Click", () => {
    it("Click sencillo", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')
        cy.wait(1000)

        cy.get('#txtUsername').should('be.visible').type('Admin')
        cy.get('#txtPassword').should('be.visible').type('admin123')
        cy.get('#btnLogin').should('be.visible').click()

        cy.get('#menu_admin_viewAdminModule > b').should('be.visible').click({force: true})

    })

})