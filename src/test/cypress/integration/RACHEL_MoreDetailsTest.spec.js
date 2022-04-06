//#----- Test Procedure -----#
describe('Test RACHEL = click on button-more-details and close after', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("find RACHEL and clicks the more details button", () => {
cy.get("[data-cypress='button-more-details-RACHEL']").should('exist')
cy.get("[data-cypress='button-more-details-RACHEL']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })