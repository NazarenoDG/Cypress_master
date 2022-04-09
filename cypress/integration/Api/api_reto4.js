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

    it("Api borrar varios campo con for", () => {
        for(let x=2; x<=4; x++){
            cy.request({
                method: "DELETE",
                url: "http://localhost:3000/posts/"+x,
                }).then(response => {
                    expect(response.status).to.eql(200)
                })
        }
    })
})
