/// <reference types='Cypress' />

import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Metodo de cargas por randoms', () =>{ 

    let numero_pruebas = 5;

    it('Test con datos random', () =>{
        for(let num = 1; num <= numero_pruebas; num++){
            let estado_Arr = ["555555","777777","888888","4444444","222222"]
            let Random_estado = estado_Arr[Math.floor(Math.random()*estado_Arr.length)]
            let cantidad = Math.floor(Math.random() * 90000)
            let cantidad2 = Math.floor(Math.random() * 55555)

            cy.visit('https://demoqa.com/text-box/') 
            cy.title().should('eq','ToolsQA')
            cy.xpath("//input[@id='userName']").should('be.visible').type("Name : "+cantidad)
            cy.xpath("//input[@id='userEmail']").should('be.visible').type("Email : "+cantidad2+"@gmail.com")

        }


        
    })
});