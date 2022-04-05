/// <reference types='Cypress' />

import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Hooks', () =>{ 

    beforeEach(() => {
        let tiempo=1000
        cy.visit('https://demoqa.com/text-box') 
        cy.title().should('eq','ToolsQA')
    })

    it('test uno', () =>{
        cy.log('Se repite en cada uno de los test')
    })

    it('test dos', () => {
        cy.log('Se repite en cada uno de los test')
    })

});