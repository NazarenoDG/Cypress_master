// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Texto_visible', (selector,texto,t) => { 
    let tiempo = t
    cy.get(selector).should('be.visible').type(texto)
    cy.wait(tiempo)
 })

 Cypress.Commands.add('Texto_visible_xpath', (selector,texto,t) => {
    let tiempo = t
    cy.xpath(selector).should('be.visible').type(texto)
    cy.wait(tiempo)
 })
 
 Cypress.Commands.add('Click', (selector,t ) => {
    let tiempo = t
    cy.get(selector).should('be.visible').click()
    cy.wait(tiempo)
 })

 Cypress.Commands.add('Click_force', (selector,t ) => {
    let tiempo = t
    cy.get(selector).should('be.visible').click({force:true})
    cy.wait(tiempo)
 })

 Cypress.Commands.add('Click_force_xpath', (selector,t ) => {
    let tiempo = t
    cy.xpath(selector).should('be.visible').click({force:true})
    cy.wait(tiempo)
 })

 Cypress.Commands.add('Validar_campo', (selector,men,nombre_campo ) => {
   cy.xpath(selector).should('be.visible').then((val)=>{
        let dato=val.text()
        let mensaje=men
        cy.log(dato)
        expect(dato).to.contain(mensaje)
        if(dato==mensaje){
            cy.log("#########")
            cy.log('El '+ nombre_campo +' no es valido')
            cy.log("#########")
        }
        })
 })

 Cypress.Commands.add('Validar_campo2', (selector,men,nombre_campo) => {
   cy.xpath(selector).should('be.visible').should("contain",men).then((val)=>{
            cy.log("#########")
            cy.log('El '+ nombre_campo +' no es valido')
            cy.log("#########")
        
   })
 })




 // Funciones por conjunto o completas
 

 // Creando Registro Toolsqa

 Cypress.Commands.add('Bloque_ToolsQA', (name,email,dir1,dir2) => { 
    cy.get('#userName').should('be.visible').type(name)
    cy.get('#userEmail').should('be.visible').type(email)
    cy.get('#currentAddress').should('be.visible').type(dir1)
    cy.get('#permanentAddress').should('be.visible').type(dir2)
    cy.get('#submit').should('be.visible').click({force:true})
 })

 Cypress.Commands.add('Bloque_ToolsQA_Dos', (name,email,dir1,dir2,t) => { 
    let tiempo = t
    cy.Texto_visible("#userName",name,500)
    cy.Texto_visible('#userEmail',email,500)
    cy.Texto_visible_xpath("//textarea[@id='currentAddress']",dir1,500)
    cy.Texto_visible_xpath("//textarea[@id='permanentAddress']",dir2,250)
    cy.Click_force_xpath("//button[@id='submit']",250)
 })

 //Reto form
 Cypress.Commands.add('Bloque_reto_form', (name,lastName,email,phone,address,city,estado,cp,web,proy) =>{
   cy.xpath("//input[@placeholder='First Name']").clear().should('be.visible').type(name);
   cy.xpath("//input[@placeholder='Last Name']").clear().should('be.visible').type(lastName);
   cy.xpath("//input[@placeholder='E-Mail Address']").clear().should('be.visible').type(email);
   cy.xpath("//input[@placeholder='(845)555-1212']").clear().should('be.visible').type(phone);
   cy.xpath("//input[@placeholder='Address']").clear().should('be.visible').type(address);
   cy.xpath("//input[@placeholder='city']").clear().should('be.visible').type(city);
   cy.xpath("//select[@name='state']").select(estado,{force:true})
   cy.xpath("//input[@placeholder='Zip Code']").clear().should('be.visible').type(cp);
   cy.xpath("//input[@placeholder='Website or domain name']").clear().should('be.visible').type(web);
   cy.xpath("//input[@value='yes']").check().should('be.checked')
   cy.xpath("//textarea[@placeholder='Project Description']").clear().should('be.visible').type(proy);
   cy.xpath("//button[normalize-space()='Send']").should('be.visible').click({force:true})
 })