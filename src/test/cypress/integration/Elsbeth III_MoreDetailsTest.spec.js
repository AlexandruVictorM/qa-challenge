//#----- Test Procedure -----#
describe('Test Elsbeth III = click on button-more-details and close after', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("find Elsbeth III and clicks the more details button", () => {
cy.get("[data-cypress='button-more-details-Elsbeth III']").should('exist')
cy.get("[data-cypress='button-more-details-Elsbeth III']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })