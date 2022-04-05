/// <reference types="Cypress" />
require('cypress-xpath')
require('cypress-plugin-tab')
describe("Nueva seccion checbox", () => {
    it("Check uno", () => {
        cy.visit("https://testingqarvn.com.es/combobox-dependiente/")
        cy.title().should('eq','ComboBox Dependiente | TestingQaRvn')

        cy.get('#wsf-1-field-61').should('be.visible').select('Linux').should('have.value','Linux')
        cy.wait(1000)
        cy.get('#wsf-1-field-64').should('be.visible').select('Debian').should('have.value','Debian')
    })
    it('Google', () => {
        cy.visit('https://www.google.com/')
        cy.title().should('eq','Google')
        
        cy.xpath("//input[@title='Buscar']").should('be.visible').type('Ferrari').type("{enter}")
        cy.get('[href="https://www.ferrari.com/es-ES"] > .LC20lb').click()
    })

    it('MultiSelect with If', () => {
        cy.visit('https://testingqarvn.com.es/base-practicas/')
        cy.title().should('eq','Productos | TestingQaRvn')
        cy.scrollTo(0, 500)
        cy.get("#wsf-1-field-165").select(["Alaska"]).then(() => {
            cy.get('#wsf-1-field-167').should('be.visible').click()
        })
    })
    it("Multiselect", () => {
        cy.visit('https://demoqa.com/select-menu')
        cy.title().should('eq','ToolsQA')
        
        cy.xpath("//select[@id='cars']").should('be.visible').select(["Volvo","Saab"]).then(() => {
            cy.xpath("//select[@id='cars']").select(["Opel","Audi"])
        })
    })
    it.only()

})