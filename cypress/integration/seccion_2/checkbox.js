/// <reference types="Cypress" />
describe("CheckBox", () => {
    it("Checkbox 1", () => {
        cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
        cy.title().should('eq','Prueba de campos Checkbox | TestingQaRvn')

        cy.get('[type="checkbox"]').check({force:true}).should('be.checked')
        cy.get('[type="checkbox"]').uncheck({force:true})

    })

    it.only("Checkbox radios button", () => {
        cy.visit("https://testingqarvn.com.es/radio-buttons/")
        cy.title().should('eq','Radio Buttons | TestingQaRvn')

        cy.get("#wsf-1-field-44-row-1").check({force:true})
        

    })

})