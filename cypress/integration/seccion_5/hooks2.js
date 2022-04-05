/// <reference types='Cypress' />

import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Hooks ejemplos', () =>{ 
let tiempo=1000

    beforeEach(() => {
        cy.visit('https://demo.seleniumeasy.com/basic-checkbox-demo.html') 
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
    })
    

    it('Test uno', () =>{
        cy.get('[type="checkbox"]').check().should('be.checked')
        cy.wait(tiempo)
    })

    it('Test dos', () =>{
        cy.get('[type="checkbox"]').uncheck().should('not.be.checked')
        cy.wait(tiempo)
    })

    it('Test tres', () =>{
        cy.xpath("(//input[@type='checkbox'])[4]").check().should('be.checked')
        cy.wait(tiempo)
    })
        
});