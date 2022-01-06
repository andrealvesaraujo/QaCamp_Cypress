describe('Login', () => {
    it('Login and Click', () => {
        cy.visit("https://react-redux.realworld.io/#/login")
        cy.get('input[type="email"]').type('test@gmail.com')
        cy.get('input[type="password"]').type('12345')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    });
})
    