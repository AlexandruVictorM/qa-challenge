//#----- Test Procedure -----#
describe('Test 2 = search for Of Course I Still Love You item, open more details and close it', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("Go to search bar and type Of Course I Still Love You", () => {
  cy.get("[data-cypress='search-input']").should('exist')
  cy.get("[data-cypress='search-input']").first().click()
.type('Of Course I Still Love You').should('have.value', 'Of Course I Still Love You')
  })

it("Find and clicks the more details button", () => { 
cy.get("[data-cypress='button-more-details-Of Course I Still Love You']").should('exist')
cy.get("[data-cypress='button-more-details-Of Course I Still Love You']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })