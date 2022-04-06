//#----- Test Procedure -----#
describe('Test 2 = search for RACHEL item, open more details and close it', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("Go to search bar and type RACHEL", () => {
  cy.get("[data-cypress='search-input']").should('exist')
  cy.get("[data-cypress='search-input']").first().click()
.type('RACHEL').should('have.value', 'RACHEL')
  })

it("Find and clicks the more details button", () => { 
cy.get("[data-cypress='button-more-details-RACHEL']").should('exist')
cy.get("[data-cypress='button-more-details-RACHEL']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })