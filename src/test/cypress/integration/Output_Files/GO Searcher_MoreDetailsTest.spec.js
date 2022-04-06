//#----- Test Procedure -----#
describe('Test GO Searcher = click on button-more-details and close after', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("find GO Searcher and clicks the more details button", () => {
cy.get("[data-cypress='button-more-details-GO Searcher']").should('exist')
cy.get("[data-cypress='button-more-details-GO Searcher']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })