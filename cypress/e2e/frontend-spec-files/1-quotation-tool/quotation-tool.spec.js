/// <reference types="cypress" />
import CreatingQuotPage from "../../../pages/1-CreatingQuotePage/CreatingQuotePage"
const creatingQuotPage = new CreatingQuotPage();
describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl') + Cypress.env('apiKey'))
 
  })

  it('displays two todo items by default', () => {

    cy.xpath("//button[normalize-space()='Hire Purchase']").should('be.visible')
    creatingQuotPage.selectTab()
    
    cy.get('.btn-calculate-desktop > .MuiButton-text').click() 
  })

})
