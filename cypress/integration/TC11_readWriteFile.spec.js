describe('Read-Write files content', () => {
    it('Write to a file', () => {
        cy.writeFile('sampleFile.txt', 'Hello World\n')
        cy.writeFile('sampleFile.txt', 'I am André', {flag: 'a+'})
    });
    it('Read from a file', () => {
        cy.readFile('sampleFile.txt').should('contains', "Hello World")
    });
})
