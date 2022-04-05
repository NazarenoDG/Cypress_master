/// <reference types='Cypress' />

import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')

describe('Carga por fixture Reto', ()=> {
    
    before(()=>{
        cy.fixture("datos3").as("datos")
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','ToolsQA')
 
    })
    it('Carga por archivo json multiple', () => {
       
        cy.get("@datos").then((datos)=>{
            for (let i=0; i< datos.length; i++ ) {
                let elem = datos[i]
                cy.get("#userName").should("be.visible").clear().type(elem.nombre)
                cy.get("#userEmail").should("be.visible").clear().type(elem.email)
                cy.get("#currentAddress").should("be.visible").clear().type(elem.dir1)
                cy.get("#permanentAddress").should("be.visible").clear().type(elem.dir2)
                cy.get("#submit").should("be.visible").click()
            }
        })  
    })
})