//#----- Test Procedure -----#
describe('Test 2 = search for Pacific Warrior item, open more details and close it', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("Go to search bar and type Pacific Warrior", () => {
  cy.get("[data-cypress='search-input']").should('exist')
  cy.get("[data-cypress='search-input']").first().click()
.type('Pacific Warrior').should('have.value', 'Pacific Warrior')
  })

it("Find and clicks the more details button", () => { 
cy.get("[data-cypress='button-more-details-Pacific Warrior']").should('exist')
cy.get("[data-cypress='button-more-details-Pacific Warrior']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })