describe('Working with plugins', () => {
    it('File Upload', () => {
        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
        const fileName = "SampleFile.pdf"
        cy.fixture(fileName)
            .then(fileContent => {
                cy.get('[type="file"]').attachFile({
                    fileContent,
                    fileName,
                    mimeType: 'application/pdf',
                });
            });
        cy.get('[type="submit"]').click()
        cy.contains("You've uploaded a file. Your notes on the file were:")
    });
})
