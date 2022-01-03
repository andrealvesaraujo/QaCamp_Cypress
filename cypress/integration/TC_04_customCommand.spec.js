describe('Create and mark-unmark as favourite', () => {
    before(() => {
       cy.SignIn()
    });

    it('Create a post', () => {
        cy.get('ul.navbar-nav').children().contains('New Post').click()  
        cy.hash().should('include', "#/editor")
        cy.get('form').within(($form)=>{
			cy.get('input').first().type("Test")
			cy.get('input').eq(1).type("Test 1")
			cy.get('textarea').last().type("Test 2")
			cy.contains('Publish Article').click()
		})
        cy.url().should('include', "article")
    });

    it('Mark-unmark as favorite', () => {
        cy.get('ul.navbar-nav').children().contains('André').click()  
        cy.wait(2000)
        cy.contains('My Articles').should("be.visible")
        cy.wait(2000)
        cy.get('.ion-heart').first().click()
        cy.wait(2000)
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.wait(2000)
        cy.get('.ion-heart').first().click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
    });
})
    