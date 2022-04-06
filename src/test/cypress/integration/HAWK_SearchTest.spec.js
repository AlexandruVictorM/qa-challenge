//#----- Test Procedure -----#
describe('Test 2 = search for HAWK item, open more details and close it', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("Go to search bar and type HAWK", () => {
  cy.get("[data-cypress='search-input']").should('exist')
  cy.get("[data-cypress='search-input']").first().click()
.type('HAWK').should('have.value', 'HAWK')
  })

it("Find and clicks the more details button", () => { 
cy.get("[data-cypress='button-more-details-HAWK']").should('exist')
cy.get("[data-cypress='button-more-details-HAWK']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })