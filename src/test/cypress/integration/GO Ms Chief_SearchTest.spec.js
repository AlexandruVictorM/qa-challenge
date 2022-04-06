//#----- Test Procedure -----#
describe('Test 2 = search for GO Ms Chief item, open more details and close it', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("Go to search bar and type GO Ms Chief", () => {
  cy.get("[data-cypress='search-input']").should('exist')
  cy.get("[data-cypress='search-input']").first().click()
.type('GO Ms Chief').should('have.value', 'GO Ms Chief')
  })

it("Find and clicks the more details button", () => { 
cy.get("[data-cypress='button-more-details-GO Ms Chief']").should('exist')
cy.get("[data-cypress='button-more-details-GO Ms Chief']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })