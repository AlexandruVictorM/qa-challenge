//#----- Test Procedure -----#
describe('Test 2 = search for GO Pursuit item, open more details and close it', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("Go to search bar and type GO Pursuit", () => {
  cy.get("[data-cypress='search-input']").should('exist')
  cy.get("[data-cypress='search-input']").first().click()
.type('GO Pursuit').should('have.value', 'GO Pursuit')
  })

it("Find and clicks the more details button", () => { 
cy.get("[data-cypress='button-more-details-GO Pursuit']").should('exist')
cy.get("[data-cypress='button-more-details-GO Pursuit']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })