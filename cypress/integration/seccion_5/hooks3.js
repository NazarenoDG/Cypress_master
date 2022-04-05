/// <reference types='Cypress' />

import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('descipcion', () =>{ 
    beforeEach(() => {        
        cy.visit('url') 
        cy.title().should('eq','titulo')
    })
    it('test', () =>{
        let tiempo=1000
        cy.visit('url') 
        cy.title().should('eq','titulo')
    })
});