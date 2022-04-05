/// <reference types="Cypress" />
require('cypress-xpath')
describe("Asserts", () => {
    it("Assert contain", () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq',"My Store")

        cy.get('#block_top_menu').contains('Women').click()
    })
    it("Assert find y validation new", () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq',"My Store")

        cy.get(".product-container").find('.product-image-container').eq(2).click()

        cy.get("#product_condition .editable").contains('New').then(() =>{
            cy.log("New")
        })
    })
    it("Assert find y validation precio", () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq',"My Store")

        cy.get(".product-container").find('.product-image-container').eq(2).click()

        cy.get("#product_condition .editable").then((e)=>{
            let estado=e.text()
            if(estado=="New"){
                cy.log("El vestido es nuevo")
            }
        })
        
        cy.get('#our_price_display').then((e) =>{
            cy.log(e.text())
            let precio=e.text()
            precio=precio.slice(1,3)
            cy.log(precio)

            if(precio > 30){
                cy.log("El vestido sale de nuestro presupuesto")
                cy.xpath("//div[@class='breadcrumb clearfix']//a[@title='Women'][normalize-space()='Women']").click()
            }else{
                cy.log("El vestido esta en nuest presupuesto")
                cy.get("#add_to_cart").click()
                cy.wait(2000)
            }
        })
    })
    it("Assert contain have.text contain.text", () => {
        cy.visit("https://demoqa.com/text-box/")

        cy.get("#userName").should('be.visible').type("Nazareno")
        cy.get("#userEmail").should('be.visible').type("Nazareno@gmail.com")
        cy.get("#submit").should('be.visible').click()

        cy.get('#name').should('have.text','Name:Nazareno')
        cy.get('#name').should('contain.text','Nazareno')

        cy.get('#email').should('have.text','Email:Nazareno@gmail.com')
        cy.get('#email').should('contain.text','Nazareno@gmail.com')
    })

    it("Assert have.value validation + then", () => {
        cy.visit("https://demoqa.com/text-box/")

        cy.get("#userName").should('be.visible').type("Nazareno")
        
        cy.get('#userName').should('have.value',"Nazareno").then(()=>{
            cy.get("#userEmail").should('be.visible').type("Nazareno@gmail.com")
            cy.get("#submit").should('be.visible').click()
        })
    })

    it("Assert have.class", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        cy.get("#userName").should("be.visible").should("have.class","mr-sm-2").then(()=>{
            cy.get("#userName").type("rodrigo")
        })
     })

     it("Assert have.class y and", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        cy.get("#userName").should("be.visible").and("have.class","mr-sm-2").then(()=>{
            cy.get("#userName").type("rodrigo")
        })
     })

     it("Assert not.have.class y and", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        cy.get("#userName").should("be.visible").and("not.have.class","mr-sm-2123").then(()=>{
            cy.get("#userName").type("rodrigo")
        })
     })

     it("Assert length and css", () => {
         cy.visit("https://demoqa.com/books")
         cy.title().should('eq','ToolsQA')

         cy.get('.rt-tbody >.rt-tr-group').should('have.length','10').and('have.css','font-weight','400')
     })

     it.only("Assert contain", () => {
        let tiempo = 1500

        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.wait(tiempo)

        cy.contains("[type='submit']","Submit").should('be.visible').click({force:true})

    })


})