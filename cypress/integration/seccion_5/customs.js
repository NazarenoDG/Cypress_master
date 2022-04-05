/// <reference types='Cypress' />

import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Comandos personalizados', () =>{ 
    beforeEach(() => {        
        cy.visit('https://demoqa.com/text-box/') 
        cy.title().should('eq','ToolsQA')
    })
    it('Demo customs', () =>{
        cy.Texto_visible("#userName","Nazareno",500)
        cy.Texto_visible('#userEmail','N@gmail.com',500)
        cy.Texto_visible_xpath("//textarea[@id='currentAddress']",'Avellaneda 123',500)
        cy.Texto_visible_xpath("//textarea[@id='permanentAddress']",'Direccion 2',250)
        cy.Click_force_xpath("//button[@id='submit']",250)
    })

    it('Demo customs complejo',() => {
        cy.Bloque_ToolsQA('Juan','Juanct@gmail','Dir1','Dir2')
    })

    it.only("Demo customs de customs", () => {
        cy.Bloque_ToolsQA_Dos('Juan','josecit123123o@gmail','Dir1','Dir2')
    })
});