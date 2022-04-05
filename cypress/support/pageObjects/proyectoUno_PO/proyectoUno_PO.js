class ProyectoUno_PO{
    
    visitHome(){
        //Cypress.config("defaultCommandTimeout",9000)

        before(() => {        
            cy.visit('https://demo.seleniumeasy.com/input-form-demo.html') 
            cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
        })
    }

    seccionUno(name,lastName,email){
        cy.xpath("//input[@placeholder='First Name']").clear().should('be.visible').type(name);
        cy.xpath("//input[@placeholder='Last Name']").clear().should('be.visible').type(lastName);
        cy.xpath("//input[@placeholder='E-Mail Address']").clear().should('be.visible').type(email);
    }

    seccionDos(phone,address,city,estado){
        cy.xpath("//input[@placeholder='(845)555-1212']").clear().should('be.visible').type(phone);
        cy.xpath("//input[@placeholder='Address']").clear().should('be.visible').type(address);
        cy.xpath("//input[@placeholder='city']").clear().should('be.visible').type(city);
        cy.xpath("//select[@name='state']").select(estado,{force:true})
    }

    seccionTres(cp,web,proy){
        cy.xpath("//input[@placeholder='Zip Code']").clear().should('be.visible').type(cp);
        cy.xpath("//input[@placeholder='Website or domain name']").clear().should('be.visible').type(web);
        cy.xpath("//input[@value='yes']").check().should('be.checked')
        cy.xpath("//textarea[@placeholder='Project Description']").clear().should('be.visible').type(proy);
        cy.xpath("//button[normalize-space()='Send']").should('be.visible').click({force:true})
    }

}//Final

export default ProyectoUno_PO;