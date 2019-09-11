// https://docs.cypress.io/api/introduction/api.html

describe('The App exists', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('div', 'Skald')
  })
})
