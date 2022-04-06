//#----- Test Procedure -----#
describe('Test 2 = search for American Spirit item, open more details and close it', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("Go to search bar and type American Spirit", () => {
  cy.get("[data-cypress='search-input']").should('exist')
  cy.get("[data-cypress='search-input']").first().click()
.type('American Spirit').should('have.value', 'American Spirit')
  })

it("Find and clicks the more details button", () => { 
cy.get("[data-cypress='button-more-details-American Spirit']").should('exist')
cy.get("[data-cypress='button-more-details-American Spirit']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })