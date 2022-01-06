// describe('Login', () => {
//     it('Login and Click', () => {
//         cy.visit("https://react-redux.realworld.io/#/login")
//         cy.fixture('userLoginDetails').then((user) => {
//             cy.get('input[type="email"]').type(user.email)
//             cy.get('input[type="password"]').type(user.password)
//         })
//         cy.get('.btn').contains('Sign in').should('be.visible').click()
//     });
// })
    

describe('Login', () => {

    let userDetails

    beforeEach(() => {
        cy.fixture('userLoginDetails').then((user) => {
            userDetails = user
        })
    })
    
    it('Login and Click', () => {
        cy.visit("https://react-redux.realworld.io/#/login")
        cy.get('input[type="email"]').type(userDetails.email)
        cy.get('input[type="password"]').type(userDetails.password)
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    });
})

// describe('Login', () => {
//     beforeEach(() => {
//         cy.fixture('userLoginDetails').as('user')
//     })
    
//     it('Login and Click', () => {
//         cy.visit("https://react-redux.realworld.io/#/login")
//         cy.get('input[type="email"]').type(this.user.email)
//         cy.get('input[type="password"]').type(this.user.password)
//         cy.get('.btn').contains('Sign in').should('be.visible').click()
//     });
// })