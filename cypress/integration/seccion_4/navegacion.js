/// <reference types='Cypress' />

import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Nav entre paginas', () =>{ 
    it('Back forward', () =>{
        let tiempo=1000
        cy.visit('https://demoqa.com/') 
        cy.title().should('eq','ToolsQA')

        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg').click({force:true})
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click({force:true})
        
        cy.go('back')
        cy.go('back')
        
        cy.go('forward')
        cy.go('forward')
    })

    it.only('Reload', () =>{
        let tiempo=1000
        cy.visit('https://demoqa.com/') 
        cy.title().should('eq','ToolsQA')

        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg').click({force:true})
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click({force:true})
        
        cy.get('#userName').should('be.visible').type('Juan');
        cy.wait(tiempo)

        cy.get('#userEmail').should('be.visible').type('naza@gmail.com');
        cy.wait(tiempo)

        cy.reload()
        cy.go('back')
        cy.go('back')
    })
});