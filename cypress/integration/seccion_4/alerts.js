/// <reference types="Cypress" />
require('cypress-xpath')

describe("Alertas en cypress", () => {
    it("Alerta 1", () => {
        cy.visit("https://demo.seleniumeasy.com/bootstrap-modal-demo.html")
        cy.title('eq','Selenium Easy Demo - Bootstrap Modal Demo to Automate')

        cy.xpath("(//a[@data-toggle='modal'][normalize-space()='Launch modal'])[1]").click()

        cy.xpath("(//a[@class='btn btn-primary'][normalize-space()='Save changes'])[1]").click()
    })

})