//#----- Test Procedure -----#
describe('Test 2 = search for American Champion item, open more details and close it', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("Go to search bar and type American Champion", () => {
  cy.get("[data-cypress='search-input']").should('exist')
  cy.get("[data-cypress='search-input']").first().click()
.type('American Champion').should('have.value', 'American Champion')
  })

it("Find and clicks the more details button", () => { 
cy.get("[data-cypress='button-more-details-American Champion']").should('exist')
cy.get("[data-cypress='button-more-details-American Champion']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })