/// <reference types='Cypress' />

import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Carga por fixture', () =>{ 

    before(function(){
        cy.fixture("datos2").as("datos_json") // alias
    })

    it('Test 1 desde json', () =>{
        cy.visit('https://demoqa.com/text-box/') 
        cy.title().should('eq','ToolsQA')

        cy.get("@datos_json").then((data)=>{
            cy.get("#userName").should('be.visible').type(data.nombre)
            cy.get("#userEmail").should('be.visible').type(data.email)
            cy.get("#currentAddress").should('be.visible').type(data.dir1)
            cy.get("#permanentAddress").should('be.visible').type(data.dir2)
            cy.get("#submit").should('be.visible').click({force:true})
        })      
    })

    
});