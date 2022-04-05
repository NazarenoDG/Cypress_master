/// <reference types="Cypress" />
require('cypress-xpath')

describe("Manejo de invoke", () => {
    it("Invoke x text", () => {
        cy.visit("https://demo.seleniumeasy.com/input-form-demo.html")

        cy.xpath("(//legend[normalize-space()='Contact Us Today!'])[1]").invoke("text").as("info")
        cy.get("@info").should('contain','Contact Us Today!')
    })

    it("Invoke x text", () => {
        cy.visit("https://demo.seleniumeasy.com/input-form-demo.html")

        cy.xpath("(//legend[normalize-space()='Contact Us Today!'])[1]").invoke("text").as("info")
        cy.get("@info").should('contain','Contact Us Today!')

        cy.get('[placeholder="First Name"]').invoke("text").as("name")
        cy.get("@name").should("contain","First Name").then(()=>{
            cy.get('[placeholder="First Name"]').type("Nazareno")
        })
    })

    it("Invoke x style", () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")

        cy.get('#wsf-1-field-21').invoke("attr","style","color:blue")
    })

    it("Invoke, ocultar y mostrar", () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")

        cy.get('#wsf-1-field-21').invoke("hide")
        cy.get('#wsf-1-label-21').invoke("hide")
        cy.wait(1500)
        cy.get('#wsf-1-field-21').invoke("show")
        cy.get('#wsf-1-label-21').invoke("show")
    })

    it.only("Invoke, reto ocultar y mostrar", () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")

        cy.get('#wsf-1-label-22').invoke("hide")
        cy.get('#wsf-1-field-22').invoke("hide")

        cy.get('#wsf-1-label-21').should('contain','Nombre')
        cy.get('#wsf-1-field-21').should('be.visible').type('Nazareno').then(()=>{
            cy.get('#wsf-1-label-22').invoke("show")
            cy.get('#wsf-1-field-22').invoke("show")
        })
    })

    it.only("Invoke x src", () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")

        cy.xpath("//img[@title='Formularios']").invoke('attr','src').should('include','http://testingqarvn.com.es/wp-content/uploads/2022/01/Formularios.jpg')

    })


    it.only("Invoke x target_blank", () => {
        cy.visit("https://dvwa.co.uk/")

        cy.xpath("//div[@class='buttons']//a[2]").invoke("removeAttr","target").click({force:true})

    })
        
    

})