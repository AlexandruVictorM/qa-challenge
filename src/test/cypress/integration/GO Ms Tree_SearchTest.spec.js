//#----- Test Procedure -----#
describe('Test 2 = search for GO Ms Tree item, open more details and close it', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("Go to search bar and type GO Ms Tree", () => {
  cy.get("[data-cypress='search-input']").should('exist')
  cy.get("[data-cypress='search-input']").first().click()
.type('GO Ms Tree').should('have.value', 'GO Ms Tree')
  })

it("Find and clicks the more details button", () => { 
cy.get("[data-cypress='button-more-details-GO Ms Tree']").should('exist')
cy.get("[data-cypress='button-more-details-GO Ms Tree']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })