//#----- Test Procedure -----#
describe('Test Kelly C = click on button-more-details and close after', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("find Kelly C and clicks the more details button", () => {
cy.get("[data-cypress='button-more-details-Kelly C']").should('exist')
cy.get("[data-cypress='button-more-details-Kelly C']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })