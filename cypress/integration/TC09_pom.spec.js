import Login from './pageObjects/login'

describe('Login', () => {
    const login = new Login()
    it('Login and Click', () => {
        cy.visit("https://react-redux.realworld.io/#/login")
        login.email().type('test@gmail.com')
        login.password().type('12345')
        login.signInButton().should('be.visible').click()
    });
})
    