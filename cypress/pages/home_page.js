class HomePage {
    elements = {
        addButton: () => cy.get('#add'),
        successMessage: (computerName) =>  cy.contains('div', `Computer ${computerName} has been created`)
    }
    
    openPage = () => cy.visit("/");
      
      clickAddButton = () => this.elements.addButton().should('be.visible').click();
      
      verifyCreation = (computerName, exist) => {
        const successMessage = this.elements.successMessage(computerName);
        exist ? successMessage.should('be.visible') : successMessage.should('not.exist');
      }
 }
 
 module.exports = new HomePage();