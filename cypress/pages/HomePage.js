class HomePage {
    elements = {
        addButton: () => cy.get('#add')
    }
    
    openPage(){
        cy.visit("/")
     }
 
    clickAddButton(){
        this.elements.addButton().should('be.visible').click();
    }

 }
 
 module.exports = new HomePage();