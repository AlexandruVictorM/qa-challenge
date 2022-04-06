//#----- Test Procedure -----#
describe('Test 2 = search for Just Read The Instructions 1 item, open more details and close it', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("Go to search bar and type Just Read The Instructions 1", () => {
  cy.get("[data-cypress='search-input']").should('exist')
  cy.get("[data-cypress='search-input']").first().click()
.type('Just Read The Instructions 1').should('have.value', 'Just Read The Instructions 1')
  })

it("Find and clicks the more details button", () => { 
cy.get("[data-cypress='button-more-details-Just Read The Instructions 1']").should('exist')
cy.get("[data-cypress='button-more-details-Just Read The Instructions 1']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })