// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import '@monorepo-ci-space/shared/e2e-utils';

Cypress.on('test:after:run', (attributes) => {
    /* eslint-disable no-console */
    console.log('Test "%s" has finished in %dms',
    attributes.title, attributes.duration)
})
