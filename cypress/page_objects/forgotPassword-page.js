export class ForgotPasswordPage {

    weblocators = {
      email: "#email_address",
      resetMyPasswordButton: ".action.submit",
      EmailErrorMessage: "#email_address-error"
    
    };

    openURL() {
        cy.visit(Cypress.env('forgotPasswordPage'))
      }

      enterEmail(email) {
        cy.get(this.weblocators.email).should('be.visible'); 
        if (email) {
          cy.get(this.weblocators.email).type(email); 
        }
      }

    clickResetPassword() {
        cy.get(this.weblocators.resetMyPasswordButton).click();
      }
}