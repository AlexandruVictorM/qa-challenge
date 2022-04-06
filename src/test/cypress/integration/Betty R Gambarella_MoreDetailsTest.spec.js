//#----- Test Procedure -----#
describe('Test Betty R Gambarella = click on button-more-details and close after', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("find Betty R Gambarella and clicks the more details button", () => {
cy.get("[data-cypress='button-more-details-Betty R Gambarella']").should('exist')
cy.get("[data-cypress='button-more-details-Betty R Gambarella']").first().click()
  })

it("Close the window", () => { 
  cy.get("[data-cypress='button-closeModalX']").should('exist')
  cy.get("[data-cypress='button-closeModalX']").first().click()
  }) })