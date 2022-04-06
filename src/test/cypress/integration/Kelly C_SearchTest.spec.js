//#----- Test Procedure -----#
describe('Test 2 = search for Kelly C item, open more details and close it', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("Go to search bar and type Kelly C", () => {
  cy.get("[data-cypress='search-input']").should('exist')
  cy.get("[data-cypress='search-input']").first().click()
.type('Kelly C').should('have.value', 'Kelly C')
  })

it("Find and clicks the more details button", () => { 
cy.get("[data-cypress='button-more-details-Kelly C']").should('exist')
cy.get("[data-cypress='button-more-details-Kelly C']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })