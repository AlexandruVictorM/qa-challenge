//#----- Test Procedure -----#
describe('Test 2 = add GO Quest to favorites and check if it remains there', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  })

it("Find and click favorites, and check if the click  has an effect", () => { 
cy.get("[data-cypress='favorite-GO Quest']").should('exist')
    .should('have.attr','title')
    .and('contain', 'Add to favourites')
cy.get("[data-cypress='favorite-GO Quest']").first().click()
cy.get("[data-cypress='favorite-GO Quest']")
    .should('have.attr','title')
    .and('contain', 'Remove from favourites')
  })

it("Click the rocket", () => { 
  cy.get("[data-cypress='button-rocket']").should('exist')
  cy.get("[data-cypress='button-rocket']").first().click()
  })

it("Favourites should remain ticked", () => { 
cy.get("[data-cypress='favorite-GO Quest']")
    .should('exist')
    .should('have.attr','title')
    .and('contain', 'Remove from favourites')
  }) })