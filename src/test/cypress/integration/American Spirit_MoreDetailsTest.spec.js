//#----- Test Procedure -----#
describe('Test American Spirit = click on button-more-details and close after', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("find American Spirit and clicks the more details button", () => {
cy.get("[data-cypress='button-more-details-American Spirit']").should('exist')
cy.get("[data-cypress='button-more-details-American Spirit']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })