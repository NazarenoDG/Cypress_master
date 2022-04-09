/// <reference types='Cypress' />

import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Demo de una rest api', () =>{ 
    it('Test api', () =>{
        const datos = {
            "Nombre": "Nazareno",
            "Ap": "DG",
            "Am": "Nieto",
            "Tel": "7878768",
            "Dir": "Demo de la direccion"
        }

        cy.log(datos["Nombre"])
        cy.log(datos["Ap"])
        cy.log(datos["Am"])
        cy.log(datos["Tel"])
        cy.log(datos["Dir"])

    })
});