describe('X - Registration', () => {
  beforeEach(() => {
   cy.visit(Cypress.env('base_url'));
   cy.dismissCookieBannerAndMigrationBar()
  })

  it('Should prevent user proceeding to step 2 of registration of phone number is invalid.', () => {
   cy.get('[data-testid="signupButton"]').click()
   cy.get('[data-testid="ocfSignupNextLink"]').should('be.disabled') // Check initial state
   
   cy.get('[name="name"]').type("Billium")
   cy.get('[name="phone_number"]').type("1234567")

   cy.contains('Please enter a valid phone number.').should('be.visible') // Ensure error triggers

   cy.get('select').eq(0).should('be.visible').select('August')
   cy.get('select').eq(1).should('be.visible').select('4')
   cy.get('select').eq(2).should('be.visible').select('1950')

   cy.get('[data-testid="ocfSignupNextLink"]').should('be.disabled') // Check state with invalid data entered
  })

  it('Should allow user to proceed to step 2 of registration provided valid email credentials are entered.', () => {
   cy.get('[data-testid="signupButton"]').click()
   cy.get('[data-testid="ocfSignupNextLink"]').should('be.disabled') // Check initial state
   
   cy.get('[name="name"]').type("Billium")
   cy.contains('Use email instead').click()
   cy.get('[name="email"]').type("myfakeaddress@fakeemail.com")

   cy.get('select').eq(0).should('be.visible').select('August')
   cy.get('select').eq(1).should('be.visible').select('4')
   cy.get('select').eq(2).should('be.visible').select('1950')

   cy.get('[data-testid="ocfSignupNextLink"]').should('be.enabled') // Check state with valid data entered
   cy.get('[data-testid="ocfSignupNextLink"]').click()
  })
})