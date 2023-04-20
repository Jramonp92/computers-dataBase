class AddnewPage {
    elements = {
        nameInput: () => cy.get('#name'),
        introducedInput: () => cy.get('#introduced'),
        discontinuedInput: () => cy.get('#discontinued'),
        companySelect: () => cy.get('#company'),
        createButton: () => cy.contains('Create this computer'),
        cancelButton: () => cy.contains('Cancel'),
    }

    fillNameInput = (name) => this.elements.nameInput().type(name);

    fillIntroducedInput = (initialDate) => this.elements.introducedInput().type(initialDate);
      
    filldiscontinuedInput = (endDate) => this.elements.discontinuedInput().type(endDate);
      
    fillCompanySelect = (option) => this.elements.companySelect().select(option);
      
    clickCreateButton = () => this.elements.createButton().should('be.visible').click();
      
    clickCancelButton = () => this.elements.cancelButton().should('be.visible').click();
      
    fillAllElements = (name, initialDate, endDate, option) => {
        this.fillNameInput(name);
        this.fillIntroducedInput(initialDate);
        this.filldiscontinuedInput(endDate);
        this.fillCompanySelect(option);
    }

 }
 
 module.exports = new AddnewPage();