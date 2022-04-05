/// <reference types='Cypress' />

import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Reto cypress x comandos personalizados', () =>{ 
    before(() => {        
        cy.visit('https://demo.seleniumeasy.com/input-form-demo.html') 
        cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
    })

    it('Prueba todo valida', () =>{
        cy.Bloque_reto_form("Nazareno","Dg","n@gmail.com","1135791231","direccion 1","Ciudad","Alabama","07980","demo.com","Proyecto demo 1");
    })

    it('Prueba validar email', () =>{
        cy.Bloque_reto_form("Nazareno","Dg","-$$$","1135791231","direccion 1","Ciudad","Alabama","07980","demo.com","Proyecto demo 1");
        cy.Validar_campo2("//small[normalize-space()='Please supply a valid email address']",'Please supply a valid email address','Email')
    })

    it('Prueba validar apellido', () =>{
        cy.Bloque_reto_form("Nazareno","-","naza@gmail.com","1135791231","direccion 1","Ciudad","Alabama","07980","demo.com","Proyecto demo 1");
        cy.Validar_campo2("//small[@data-bv-for='last_name'][normalize-space()='Please enter more than 2 characters']",'Please enter more than 2 characters','Apellido')
    })

    it('Prueba validar nombre', () =>{
        cy.Bloque_reto_form("-","Dg","naza@gmail.com","1135791231","direccion 1","Ciudad","Alabama","07980","demo.com","Proyecto demo 1");
        cy.Validar_campo2("//small[@data-bv-for='first_name'][normalize-space()='Please enter more than 2 characters']",'Please enter more than 2 characters','Nombre')
    })


});