const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://example.com", // Change this to your application's base URL
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    specPattern: "cypress/tests/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 30000,
    viewportWidth: 1280,
    viewportHeight: 720
  }
});
