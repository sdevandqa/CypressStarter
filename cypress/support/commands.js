Cypress.Commands.add('invalidForgottenPasswordSubmission', () => {
    cy.get('[name="username"]').type("fakeemail4@email.com")
    cy.contains('Next').click()
    cy.get('[data-testid="ocfEnterTextTextInput"]').type('banana193040393')
    cy.contains('Next').click()
  })

  Cypress.Commands.add('dismissCookieBannerAndMigrationBar', () => {
    cy.contains('Accept all cookies').click()
    cy.get('[data-testid="xMigrationBottomBar').click()
  })


