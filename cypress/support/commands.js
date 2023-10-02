import { registerCommand } from 'cypress-wait-for-stable-dom'
registerCommand()
import { BasePage } from "../page_objects/base-page"
import { LoginPage } from "../page_objects/login-page"
const LoginPageObj = new LoginPage
const BasePageObj = new BasePage

Cypress.Commands.add('assertURL', (expectedURL) => {
    cy.url().should('eq', expectedURL)
  })

Cypress.Commands.add('assertMessage', (selector, expectedMessage) => {
    cy.get(selector).should('have.text', expectedMessage);
});

Cypress.Commands.add('login', (email, password) => {
    
  LoginPageObj.enterEmail(email),
  LoginPageObj.enterPassword(password),
  LoginPageObj.clickSignIn()
  
  })

Cypress.Commands.add('signOut', () => {
    
  BasePageObj.SignOut()
  cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 })
  })

Cypress.on('uncaught:exception', (err, runnable) => {
    // prevent Cypress from failing the test
    return false;
  });

  


  