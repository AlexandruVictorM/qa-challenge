//#----- Test Procedure -----#
describe('Test 2 = search for A Shortfall of Gravitas item, open more details and close it', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("Go to search bar and type A Shortfall of Gravitas", () => {
  cy.get("[data-cypress='search-input']").should('exist')
  cy.get("[data-cypress='search-input']").first().click()
.type('A Shortfall of Gravitas').should('have.value', 'A Shortfall of Gravitas')
  })

it("Find and clicks the more details button", () => { 
cy.get("[data-cypress='button-more-details-A Shortfall of Gravitas']").should('exist')
cy.get("[data-cypress='button-more-details-A Shortfall of Gravitas']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })