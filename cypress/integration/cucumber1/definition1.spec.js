Given ('Abrir el navegador principal', () => {
    cy.visit('https://demoqa.com/text-box/')
})

When ('Cargando el nombre {word}', (username) => {
    cy.get('#userName').should('be.visible').type(username);
})

When ('Cargando el email {word}', (email) => {
    cy.get('#userEmail').should('be.visible').type(email);
})

And ('Cargando la direccion {word}', (dir1) => {
    cy.get('#currentAddress').should('be.visible').type(dir1);
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
