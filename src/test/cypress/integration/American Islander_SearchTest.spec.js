//#----- Test Procedure -----#
describe('Test 2 = search for American Islander item, open more details and close it', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("Go to search bar and type American Islander", () => {
  cy.get("[data-cypress='search-input']").should('exist')
  cy.get("[data-cypress='search-input']").first().click()
.type('American Islander').should('have.value', 'American Islander')
  })

it("Find and clicks the more details button", () => { 
cy.get("[data-cypress='button-more-details-American Islander']").should('exist')
cy.get("[data-cypress='button-more-details-American Islander']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })