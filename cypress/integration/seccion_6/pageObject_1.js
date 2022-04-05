import ProyectoUno_PO from '../../support/pageObjects/proyectoUno_PO';

/// <reference types='Cypress' />


import 'cypress-file-upload'
import { Runnable } from 'mocha';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe('Page object models', () =>{ 
    
    const master = new ProyectoUno_PO()
    master.visitHome()

    Cypress.on('uncaught:exception',(err,Runnable) => {
        return false
    })

    it('Test Seccion Uno', () =>{
        master.seccionUno('Carlos','Olmos','Carlos@gmail.com')
    })
    it('Test Seccion dos', () => {
        master.seccionDos('1','Direccion uno','Estados unidos','Colorado')
        cy.Validar_campo2("//small[normalize-space()='Please supply a vaild phone number with area code']","Please supply a vaild phone number with area code","Telefono")
    })
    it('Test Seccion tres', () => {
        master.seccionTres('07970',"demo.com",'1')
        cy.Validar_campo2("//small[contains(text(),'Please enter at least 10 characters and no more th')]","Please enter at least 10 characters and no more than 200","proy")
    })
    it('Todas las secciones', () => {
        master.seccionUno('Carlos','Olmos','Carlos@gmail.com')
        master.seccionDos('5568573288','Direccion uno','Estados unidos','Colorado')
        master.seccionTres('07970',"demo.com",'proyecto uno demo')
    })
});