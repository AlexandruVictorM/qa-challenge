//#----- Test Procedure -----#
describe('Test 2 = search for NRC Quest item, open more details and close it', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("Go to search bar and type NRC Quest", () => {
  cy.get("[data-cypress='search-input']").should('exist')
  cy.get("[data-cypress='search-input']").first().click()
.type('NRC Quest').should('have.value', 'NRC Quest')
  })

it("Find and clicks the more details button", () => { 
cy.get("[data-cypress='button-more-details-NRC Quest']").should('exist')
cy.get("[data-cypress='button-more-details-NRC Quest']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })