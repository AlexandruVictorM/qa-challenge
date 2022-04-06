//#----- Test Procedure -----#
describe('Test 2 = search for Pacific Freeedom item, open more details and close it', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("Go to search bar and type Pacific Freeedom", () => {
  cy.get("[data-cypress='search-input']").should('exist')
  cy.get("[data-cypress='search-input']").first().click()
.type('Pacific Freeedom').should('have.value', 'Pacific Freeedom')
  })

it("Find and clicks the more details button", () => { 
cy.get("[data-cypress='button-more-details-Pacific Freeedom']").should('exist')
cy.get("[data-cypress='button-more-details-Pacific Freeedom']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })