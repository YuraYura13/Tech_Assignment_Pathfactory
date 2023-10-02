export class LoginPage {

  weblocators = {

    email: "#email",
    password: '[name="login[password]',
    signInButton: ".action.login",
    forgotPasswordButton: ".action.remind",
    incorrectSignInMessage: "[data-ui-id='message-error']",
    emptyEmailErrorMessage: "#email-error",
    emptyPassErrorMessage: "#pass-error",
    passwordResetSuccessMessage: ".success.message"

  };

  openURL() {

    cy.visit(Cypress.env('loginPage'))
  }

  enterEmail(email) {
    cy.get(this.weblocators.email).should('be.visible'); 
    if (email) {
      cy.get(this.weblocators.email).type(email); 
    }
  }

  enterPassword(password) {
    cy.get(this.weblocators.password).should('be.visible');
    if (password) {
      cy.get(this.weblocators.password).type(password); 
    }
  }

  clickSignIn() {
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 })
    cy.get(this.weblocators.signInButton).click();
  }

  clickForgotPassword() {
    cy.get(this.weblocators.forgotPasswordButton).click();
  }

  verifyIncorrectSignInMessage() {
    return cy.get(this.weblocators.incorrectSignInMessage)
 }

  verifyCustomeLoginTitle(message) {
    cy.contains(message).should('be.visible');
 }

 verifyWrongEmailMessage() {
  return cy.get(this.weblocators.emptyEmailErrorMessage)
 }

 verifyWrongPassMessage() {
  return cy.get(this.weblocators.emptyPassErrorMessage)
 }

 verifyPasswordResetSuccesMessage() {
  return cy.get(this.weblocators.passwordResetSuccessMessage)
 }
}
