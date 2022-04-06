//#----- Test Procedure -----#
describe('Test American Champion = click on button-more-details and close after', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("find American Champion and clicks the more details button", () => {
cy.get("[data-cypress='button-more-details-American Champion']").should('exist')
cy.get("[data-cypress='button-more-details-American Champion']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })