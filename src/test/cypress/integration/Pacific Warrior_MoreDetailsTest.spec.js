//#----- Test Procedure -----#
describe('Test Pacific Warrior = click on button-more-details and close after', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("find Pacific Warrior and clicks the more details button", () => {
cy.get("[data-cypress='button-more-details-Pacific Warrior']").should('exist')
cy.get("[data-cypress='button-more-details-Pacific Warrior']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })