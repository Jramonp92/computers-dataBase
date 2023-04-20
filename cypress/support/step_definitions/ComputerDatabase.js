const {Given, When, Then, Before } = require("@badeball/cypress-cucumber-preprocessor");
const HomePage =  require('../../pages/home_page')
const AddNewPage =  require('../../pages/add_new_page')

Before(() => {
  // reset application
  HomePage.openPage();
  HomePage.clickAddButton();
  cy.url().should('be.equal',  `${Cypress.config("baseUrl")}/new`);
})

When('I Fill the form with {string} - {string} - {string} - {string} and I click the create button', (computerName, introduced,discontinued,company) => {
  AddNewPage.fillAllElements(computerName,introduced,discontinued,company)
  AddNewPage.clickCreateButton()
})

Then('I must be redirected to the list page and I must see a message indicating the computer {string} has been created', (computerName) => {
  cy.url().should('be.equal',  `${Cypress.config("baseUrl")}`)
  HomePage.verifyCreation(computerName, true)
})

When('I Fill the form with {string} - {string} - {string} - {string} and I click the cancel button', (computerName, introduced,discontinued,company) => {
  AddNewPage.fillAllElements(computerName,introduced,discontinued,company)
  AddNewPage.clickCancelButton()
})

Then('I must be redirected to the list page and the computer {string} shall not exist', (computerName) => {
  cy.url().should('be.equal',  `${Cypress.config("baseUrl")}`)
  HomePage.verifyCreation(computerName,false)
})

Then('I must get the following error {string}', (error) => {
  AddNewPage.verifyErrorExist(error)
})
