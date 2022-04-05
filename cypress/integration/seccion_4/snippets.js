
cy.get('[argumento]').should('be.visible').type('texto');
cy.wait(tiempo)

/// <reference types='Cypress' />

import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('descipcion', () =>{ 
    it('test', () =>{
        let tiempo=1000
        cy.visit('url') 
        cy.title().should('eq','titulo')
    })
});

