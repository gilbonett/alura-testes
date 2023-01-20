const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'copwd8',
  e2e: {
    baseUrl:'http://alura-fotos.herokuapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
