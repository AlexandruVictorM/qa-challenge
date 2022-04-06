//#----- Test Procedure -----#
describe('Test 2 = search for Elsbeth III item, open more details and close it', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("Go to search bar and type Elsbeth III", () => {
  cy.get("[data-cypress='search-input']").should('exist')
  cy.get("[data-cypress='search-input']").first().click()
.type('Elsbeth III').should('have.value', 'Elsbeth III')
  })

it("Find and clicks the more details button", () => { 
cy.get("[data-cypress='button-more-details-Elsbeth III']").should('exist')
cy.get("[data-cypress='button-more-details-Elsbeth III']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })