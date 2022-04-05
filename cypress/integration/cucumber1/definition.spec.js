Given ('Abrir el navegador principal', () => {
    cy.visit('https://demoqa.com/text-box/')
})

When ('Cargando el nombre {word}', (name) => {
    cy.get('#userName').should('be.visible').type(name);
})

When ('Cargando el email {word}', (email) => {
    cy.get('#userEmail').should('be.visible').type(email);
})

And ('Cargando la direccion {word}', (dir) => {
    cy.get('#currentAddress').should('be.visible').type(dir);
})

And ('Cargando la direccion dos {word}', (dir2) => {
    cy.get('#permanentAddress').should('be.visible').type(dir2);
})

And ('Click en button', () => {
    cy.get('#submit').should('be.visible').click({force:true})
})

Then ('Validar el nombre de la pagina', () => {
    cy.title().should('eq','ToolsQA')
})
