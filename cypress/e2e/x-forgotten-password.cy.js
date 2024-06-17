describe('X - Forgotten Password Request', () => {
    before(() => {
        cy.visit(Cypress.env('staging_url'));
        cy.dismissCookieBannerAndMigrationBar()
     })

    it('Should trigger error message for non existant account during forgotten password submission', () => {
        cy.contains('Sign in').click() 
        cy.contains('Forgot password?').click()
        cy.invalidForgottenPasswordSubmission()
        cy.contains('Incorrect. Please try again.').should('be.visible')
    }) 
})