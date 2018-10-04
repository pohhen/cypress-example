describe('Kauppa Tests', function() {
  it('Validate Purchase', function() {
    cy.viewport(1600, 1200)
    cy.visit('https://elisa.fi/')
    cy.contains('selvä')
      .click()
    cy.contains('Tuotteet ja palvelut')
      .click()
    cy.contains('Laitteet')
      .click()
    cy.contains('konsolit')
      .click()
    //Assert you have moved to store
    cy.url().should('contain', 'https://elisa.fi/kauppa/')
    cy.contains('Red Dead Redemption')
      .click()
    cy.contains('Red Dead Redemption 2')
    cy.screenshot('1-product-capture', {capture: 'viewport'})
    cy.get('.js-estimated-monthly-price')
      .contains('5,40')
    cy.get('.js-total-price')
      .contains('64,80')
    cy.contains('Kertamaksu')
      .click()
    cy.get('.js-price-container')
      .contains('64,90')
    cy.contains('LISÄÄ KORIIN')
      .click()
    //Force to click element
    cy.get('#cartCheckoutButton')
      .click()
    cy.contains('JATKA')
      .click()
    cy.contains('selvä')
      .click()
    cy.contains('Yhteensä')
      .next()
      //Assert that single payment is chosen
      .should('contain', 'Kertamaksut 64,90 €')
      .and('not.contain', 'Kuukausimaksut')
    cy.screenshot('2-shopping-card', {capture: 'viewport'})
  })
})