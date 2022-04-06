//#----- Test Procedure -----#
describe('Test Just Read The Instructions 1 = click on button-more-details and close after', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("find Just Read The Instructions 1 and clicks the more details button", () => {
cy.get("[data-cypress='button-more-details-Just Read The Instructions 1']").should('exist')
cy.get("[data-cypress='button-more-details-Just Read The Instructions 1']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })