//#----- Test Procedure -----#
describe('Test Hollywood = click on button-more-details and close after', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("find Hollywood and clicks the more details button", () => {
cy.get("[data-cypress='button-more-details-Hollywood']").should('exist')
cy.get("[data-cypress='button-more-details-Hollywood']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })