/// <reference types='Cypress' />

import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Demo de una rest api 2', () =>{ 
    it('Test api', () =>{
        const datos = {
            "Nombre": "Nazareno",
            "Ap": "DG",
            "Am": "Nieto",
            "Tel": "7878768",
            "Dir": "Demo de la direccion",
        
            "Cursos":[
                {
                    "Nombre": "Php",
                    "Descripcion": "Lenguaje de prog php"
                },
                {
                    "Nombre": "Javascript",
                    "Descripcion": "Lenguaje de prog JS"
                },
                {
                    "Nombre": "Java",
                    "Descripcion": "Lenguaje de prog java"
                }
            ]
        }
        cy.log(datos.Dir)
        cy.log(datos.Cursos)
        cy.log(datos.Cursos[2].Nombre)
       
    })
});