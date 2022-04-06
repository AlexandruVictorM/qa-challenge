//#----- Test Procedure -----#
describe('Test 2 = search for GO Searcher item, open more details and close it', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("Go to search bar and type GO Searcher", () => {
  cy.get("[data-cypress='search-input']").should('exist')
  cy.get("[data-cypress='search-input']").first().click()
.type('GO Searcher').should('have.value', 'GO Searcher')
  })

it("Find and clicks the more details button", () => { 
cy.get("[data-cypress='button-more-details-GO Searcher']").should('exist')
cy.get("[data-cypress='button-more-details-GO Searcher']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })