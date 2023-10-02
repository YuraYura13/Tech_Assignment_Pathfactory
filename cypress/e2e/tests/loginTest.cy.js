import { LoginPage } from "../../page_objects/login-page";
import { BasePage } from "../../page_objects/base-page";
import { ForgotPasswordPage } from "../../page_objects/forgotPassword-page";
import testData from "../../fixtures/testData.json";
const BasePageObj = new BasePage();
const LoginPageObj = new LoginPage();
const ForgotPasswordPageObj = new ForgotPasswordPage();
const resetSuccessMessage = testData.message.passwordResetSuccesMessage.replace('{email}', testData.login.email);

describe("Sign-in functionality", () => {
  beforeEach(() => {
    LoginPageObj.openURL()
  });

  it.only("Should Sign-in/Sign-out with valid credentials", () => {
    cy.login(testData.login.email, testData.login.password);
    cy.assertURL(Cypress.env("myAccountPage"));
    cy.signOut()
    BasePageObj.verifySignOutMessage(testData.message.signOutMessage)
    
  });

  it("Should not Sign-in with invalid email but valid password", () => {
    cy.login(testData.login.invalidEmail, testData.login.password);
    LoginPageObj.verifyIncorrectSignInMessage().should('contain', testData.message.incorrectSignInMessage)
    
  });

  it("Should not Sign-in with invalid password but valid email", () => {
    cy.login(testData.login.email, testData.login.invalidPassword);
    LoginPageObj.verifyIncorrectSignInMessage().should('contain', testData.message.incorrectSignInMessage)
  });

  it("Should not Sign-in with invalid password and email", () => {
    cy.login(testData.login.invalidEmail, testData.login.invalidPassword);
    LoginPageObj.verifyIncorrectSignInMessage().should('contain', testData.message.incorrectSignInMessage)
  });

  it("Should not Sign-in with empty email and password fields", () => {
    LoginPageObj.clickSignIn()
    LoginPageObj.verifyWrongEmailMessage().should('be.visible').should('contain', testData.message.emptySignInErrorMessage)
    LoginPageObj.verifyWrongPassMessage().should('be.visible').should('contain', testData.message.emptySignInErrorMessage)

  });

  it("Should not Sign-in withot @ sign", () => {
    cy.login(testData.login.emailWithoutAtSign, testData.login.invalidPassword);
    LoginPageObj.verifyWrongEmailMessage().should('contain', testData.message.incorrectSignInMessageFormat)
  });

  it("Should allow user to navigate to Forgot Password page from Login page", () => {
    LoginPageObj.clickForgotPassword()
    cy.assertURL(Cypress.env('forgotPasswordPage'))
  });

  it("Should allow user to request password reset email", () => {
    ForgotPasswordPageObj.openURL()
    ForgotPasswordPageObj.enterEmail(testData.login.email)
    ForgotPasswordPageObj.clickResetPassword()
    cy.assertURL(Cypress.env('loginPage'))
    LoginPageObj.verifyPasswordResetSuccesMessage().should('contain', resetSuccessMessage)
    
  });

});

