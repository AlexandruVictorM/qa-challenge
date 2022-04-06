//#----- Test Procedure -----#
describe('Test Of Course I Still Love You = click on button-more-details and close after', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("find Of Course I Still Love You and clicks the more details button", () => {
cy.get("[data-cypress='button-more-details-Of Course I Still Love You']").should('exist')
cy.get("[data-cypress='button-more-details-Of Course I Still Love You']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })