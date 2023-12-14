const { defineConfig } = require("cypress");
const fs = require("fs-extra");
const path = require("path");

const fetchConfigurationByFile = file => {
  const pathOfConfigurationFile = path.resolve(__dirname,
    "./cypress/env_files",
    `${file}.json`);
   
  return (
    file && fs.readJson(pathOfConfigurationFile)
  );
};

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      const environment = config.env.configFile || "dev";
      const configurationForEnvironment = fetchConfigurationByFile(environment);
    
      return configurationForEnvironment || config;
      
    },
    experimentalWebKitSupport: true,
    specPattern: 'cypress/e2e/**/*.spec.js',
    excludeSpecPattern: "other/path/to/**/*.js",
    supportFile: 'cypress/support/commands.js',
    supportFile: 'cypress/support/e2e.js'

  },
});
