/// <reference types="Cypress" />
describe("Reference to windows", () => {
    it("Windows property charset, url,", () => {
        cy.visit("https://demo.seleniumeasy.com/basic-first-form-demo.html")
        cy.title().should('eq','Selenium Easy Demo - Simple Form to Automate using Selenium')
        
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.url().should('include','basic-first-form-demo.html')
        cy.url().should('eq','https://demo.seleniumeasy.com/basic-first-form-demo.html')
        
    })

})