/// <reference types="Cypress" />
require('cypress-xpath')

describe("Tipos de selectores", () => {
    it("Selector por ID", () => {
        cy.visit("https://demoqa.com/text-box/")
        cy.title().should('eq','ToolsQA')

        cy.get('#userName').should('be.visible',{timeout:5000}).type('Naza')
        cy.get('#userEmail').should('be.visible').type('Naza@gmail.com')
        cy.get('#currentAddress').should('be.visible').type('Jose cpa')
        cy.get('#permanentAddress').should('be.visible').type('123')

    })
    it('Selector por atributo', () => {
        cy.visit("https://demoqa.com/text-box/")
        cy.title().should('eq','ToolsQA')

        cy.get("[placeholder='Full Name']").should('be.visible').type('nazareno')
    })

    it('Selector por XPATH',() => {
        cy.visit("https://demoqa.com/text-box/")
        cy.title().should('eq','ToolsQA')

        cy.xpath('//*[@id="userName"]').should('be.visible').type('Nazareno')
        cy.xpath('//*[@id="userEmail"]').should('be.visible').type('naza@gmail.com')
        cy.xpath('//*[@id="currentAddress"]').should('be.visible').type('LaF')
        cy.xpath('//*[@class="body-height"]').should('be.visible').type('123')
    })

    it('Selector por CONTAIN',() => {
        cy.visit("https://demoqa.com/automation-practice-form/")
        cy.title().should('eq','ToolsQA')

        cy.get('.custom-control-label').contains('Female').click()
        cy.get('.custom-control-label').contains('Male').click()
        cy.get('.custom-control-label').contains('Other').click()
    })
    it.only('Selector por copy_selector',() => {
        cy.visit("https://demoqa.com/automation-practice-form/")
        cy.title().should('eq','ToolsQA')

        cy.get('#userNumber').should('be.visible').type('1135')
        

    })


})