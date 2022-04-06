//#----- Test Procedure -----#
describe('Test A Shortfall of Gravitas = click on button-more-details and close after', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("find A Shortfall of Gravitas and clicks the more details button", () => {
cy.get("[data-cypress='button-more-details-A Shortfall of Gravitas']").should('exist')
cy.get("[data-cypress='button-more-details-A Shortfall of Gravitas']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })