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

    it("Api post insertar x ciclo", () => {
        for(let x=1;x<=5;x++){
            let tx=Math.random().toString(5)
            cy.request({
                method: "POST",
                url: "http://localhost:3000/posts",
                body: {
                    "id": 1+x,
                    "title": "Demo titulo: " +tx,
                    "author": "Author: "+tx
                }

                
            }).then(response => {
                expect(response.status).to.eql(201)
            })
        }
    })
})
