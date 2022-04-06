//#----- Test Procedure -----#
describe('Test 2 = search for Hollywood item, open more details and close it', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("Go to search bar and type Hollywood", () => {
  cy.get("[data-cypress='search-input']").should('exist')
  cy.get("[data-cypress='search-input']").first().click()
.type('Hollywood').should('have.value', 'Hollywood')
  })

it("Find and clicks the more details button", () => { 
cy.get("[data-cypress='button-more-details-Hollywood']").should('exist')
cy.get("[data-cypress='button-more-details-Hollywood']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })