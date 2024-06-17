describe('X - Login', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('base_url'));
    cy.dismissCookieBannerAndMigrationBar()
 })
  
  it('Should render sign in with Google and Apple buttons', () => {
    cy.contains('Sign in').click() 
    cy.contains('Sign in with Google').should('be.visible')
    cy.contains('Sign in with Apple').should('be.visible')
  })

  it('Should prevent user logging in with invalid credentials', () => {
    cy.contains('Sign in').click() 
    cy.contains('Next') .click() 
    cy.get('[data-testid="toast"]').should('be.visible')
    cy.get('[name="text"]').type("myfakeaddress@fakeemail.com")
    cy.contains('Next') .click() 
    cy.contains('Sorry, we could not find your account.').should('be.visible')
  })
})