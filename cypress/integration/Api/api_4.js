/// <reference types='Cypress' />

import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Api consulta GET', () =>{ 
    
    let datos;

    it('Test api Get', () =>{
        datos = cy.request("http://localhost:3000/posts")
        datos.its("status").should("equal",200)
    })

    it("Test api Get 2", () =>{
        datos = cy.request("http://localhost:3000/posts")
        .should((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it("Test api get metodo dos", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            let datos;
            datos = JSON.parse(JSON.stringify(response.body)) //Convertir datos para leer
            cy.log(datos)
            expect(datos[0]).has.property("title","Cypress")
        })
    })


});