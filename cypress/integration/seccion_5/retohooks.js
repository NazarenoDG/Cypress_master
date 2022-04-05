/// <reference types='Cypress' />

import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Reto hooks', () =>{ 
    beforeEach(() => {        
        cy.visit('https://opensource-demo.orangehrmlive.com/') 
        cy.title().should('eq','OrangeHRM')
        cy.get('#txtUsername').should('be.visible').clear().type('Admin');
        cy.get('#txtPassword').should('be.visible').clear().type('admin123');
        cy.xpath("//input[@id='btnLogin']").should('be.visible').click({force:true})
    })

    after(() => {
        cy.xpath("//a[@id='welcome']").click({force:true})
        cy.xpath("//a[normalize-space()='Logout']").click({force:true})

    })

    it('Test 1', () =>{
        cy.xpath("//b[normalize-space()='Admin']").should('be.visible').click({force:true})
    })

    it('Test 2', () =>{
        cy.xpath("//b[normalize-space()='My Info']").should('be.visible').click({force:true})
    })

    it('Test 3', () =>{
        cy.xpath("//b[normalize-space()='Performance']").should('be.visible').click({force:true})
    })
    
    

});