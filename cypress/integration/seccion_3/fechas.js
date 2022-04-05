/// <reference types="Cypress" />
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe("Campos de tipo fecha", () => {
    it("Fecha 1", () => {
        cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html")

        cy.get('#sandbox-container1 > .input-group > .form-control').should('be.visible').type('16/03/2022').tab()
            cy.get('[placeholder="Start date"]').should('be.visible').type('20/03/2022 {esc}').then(()=>{
                cy.get('[placeholder="End date"]').should('be.visible').type('25/03/2022 {esc}')

            })
    })

    it.only('Fecha 2 res', () => {
        cy.visit("https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html")

        cy.get('[placeholder="Start date"]').should('be.visible').type('20/03/2022 {esc}').tab().type('25/03/2022 {esc}')

    })
})