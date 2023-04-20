const {Given, When, Then, And } = require("@badeball/cypress-cucumber-preprocessor");
const HomePage =  require('../../pages/HomePage')

Given('I am on the home page', () => {
  HomePage.openPage()
  })

When('I click the add button', () => {
  HomePage.clickAddButton()
  })

Then('I am redirected to the add page', () => {
  cy.url().should('be.equal',  `${Cypress.config("baseUrl")}/new`)
  })