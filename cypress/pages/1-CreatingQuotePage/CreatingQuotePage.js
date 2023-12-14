class CreatingQuotPage{ 
    constructor() {
        this.getPageData = null;
        this.getPageLocator = null;
    
        // Execute the readFile methods in the `before` hook
        before(() => {
          this.readPageLocator();
          this.readPageData();
        });
      }
    
      readPageLocator() {
        cy.readFile('cypress/pages/1-CreatingQuotePage/PageLocator.json').then((fileData) => {
          this.getPageLocator = fileData;
        });
      }
    
      readPageData() {
        cy.readFile('cypress/pages/1-CreatingQuotePage/PageData.json').then((fileData) => {
          this.getPageData = fileData;
        });
      }
    
      selectTab() {
        console.log(this.getPageData,this.getPageLocator,'Success after')
       // cy.get(this.getPageLocator.pageCssSelector.tabBar+ `(${this.getPageData.topBarData.financeleaseTab})`).should('be.visible')
      cy.get("button.Mui-selected:contains('Finance Lease')").should('be.visible')
    }
    
} export default CreatingQuotPage