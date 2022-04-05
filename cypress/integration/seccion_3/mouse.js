/// <reference types="Cypress" />

import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')

describe("Cypress mouse", () => {

    it('Drag and Drop', () => {
        
        cy.visit('https://demoqa.com/droppable')
        cy.title('eq','ToolsQA')

        cy.get('#draggable').drag('#simpleDropContainer > #droppable',{force:true})
    })

    it('Drag and Drop 2', () => {
        cy.visit('https://www.way2automation.com/')

        cy.contains('All Courses').trigger('mouseover')
        // cy.contains('Pepito').invoke('removeAttr','target').click()
        // No abre una pagina externa, le saca esa funcion
    })

    it.only('Drag and drop 3', () => {
        cy.visit('https://demo.seleniumeasy.com/drag-drop-range-sliders-demo.html')
        cy.title().should('eq','Selenium Easy - Drag and Drop Range Sliders')

        cy.get('#slider1 > .range > input').invoke('attr','value','80')
        cy.get('#slider3 > .range > input').invoke('attr','value','80')
        cy.get('#slider5 > .range > input').invoke('attr','value','80')

    })
})