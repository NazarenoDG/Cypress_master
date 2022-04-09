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

    it("Test api get metodo post", () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts",
            body: {
                "id": 2,
                "title": "Insertando un valor en Cypress API",
                "author": "Nazareno DG"
            }
        }).then(response => {
            expect(response.status).to.eql(201)
        })
    })
})
