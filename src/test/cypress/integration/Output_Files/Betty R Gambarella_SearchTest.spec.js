//#----- Test Procedure -----#
describe('Test 2 = search for Betty R Gambarella item, open more details and close it', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("Go to search bar and type Betty R Gambarella", () => {
  cy.get("[data-cypress='search-input']").should('exist')
  cy.get("[data-cypress='search-input']").first().click()
.type('Betty R Gambarella').should('have.value', 'Betty R Gambarella')
  })

it("Find and clicks the more details button", () => { 
cy.get("[data-cypress='button-more-details-Betty R Gambarella']").should('exist')
cy.get("[data-cypress='button-more-details-Betty R Gambarella']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })