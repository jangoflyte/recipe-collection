const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //so it can connect to local host
    baseUrl: "http://localhost:3000",
  },
});
