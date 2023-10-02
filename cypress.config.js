const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl:"https://magento.softwaretestingboard.com/",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

  env: {
    loginPage: 'https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw%2C%2C/',
    myAccountPage: 'https://magento.softwaretestingboard.com/customer/account/index/',
    forgotPasswordPage: 'https://magento.softwaretestingboard.com/customer/account/forgotpassword/',
    logoutSuccessPage: 'https://magento.softwaretestingboard.com/customer/account/logoutSuccess/',
    homePage: "https://magento.softwaretestingboard.com/"
  },

});
