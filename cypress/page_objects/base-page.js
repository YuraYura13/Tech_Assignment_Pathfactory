
export class BasePage {

  weblocators = {
    toggleButton: ".action.switch",
    headerDropdown: ".page-header [data-toggle='dropdown']",
    signOutButton: ".authorization-link:first",
    signOutMessage: "[data-ui-id='page-title-wrapper']"
  }

  verifySignOutMessage(message) {
    cy.contains(message).should('be.visible');
  }

  SignOut() {
    cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 })
    cy.get(this.weblocators.headerDropdown).should('be.visible').click();
    cy.get(this.weblocators.signOutButton).click();
  }
}
