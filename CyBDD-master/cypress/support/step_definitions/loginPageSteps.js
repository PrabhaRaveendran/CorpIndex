import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
require('cypress-xpath')
const randomString = Array.from({length: 5}, () => Math.random().toString(36)[2]).join('');
const randomEmail = `${Array.from({length: Math.floor(Math.random() * 10) + 5}, () => Math.random().toString(36)[2]).join('')}@${Array.from({length: Math.floor(Math.random() * 5) + 5}, () => Math.random().toString(36)[2]).join('')}.com`;

Given('I am in login page', () => {
    cy.visit('https://corpindex.online/demo/school1/example/authentication')
  })

When('I click on login button' , () => {
   cy.get('button[type=submit]').click()
})

Then('I should logged in and redirected to dashboard page', () => {
  cy.get('p.oxd-userdropdown-name').should('be.visible')
})

When ('I enter valid username and password', () => {
  cy.fixture('users.json').then((users) => {
    cy.get(':nth-child(2) > .input-group > .form-control').type(users.valid.username)
    cy.get(':nth-child(3) > .input-group > .form-control').type(users.valid.password)
   
  })
})

Then('I should see be able to create a branch', () => {
  cy.get('.nav-main > :nth-child(3) > a').click()
  cy.get('.tabs-custom > .nav > :nth-child(2) > a').click()
  cy.get('.mt-md > .col-md-6 > .form-control').type(randomString)
  cy.get(':nth-child(3) > .col-md-6 > .form-control').type(randomString)
  cy.get(':nth-child(5) > .col-md-6 > .form-control').type(randomString)
  cy.get(':nth-child(6) > .col-md-6 > .form-control').type(randomString)
  cy.get(':nth-child(7) > .col-md-6 > .form-control').type(randomString)
  cy.get(':nth-child(4) > .col-md-6 > .form-control').type(randomEmail)
  cy.get('.col-md-2 > .btn').click()
  cy.get('.table-responsive').should('contain.text', randomString);
  cy.get(':nth-child(n) > .min-w-c').last().click()
  cy.get('.swal2-confirm').click();
  cy.get('#swal2-title').should('contain.text', "Deleted");
  cy.get('.swal2-confirm').click();
})

Then(`I should see me`, () => {
  // cy.get('//span[normalize-space()='Reports']').click();
  // cy.get('.nav-expanded > .nav > :nth-child(1) > a').click();
});
// When('I enter {string} in username field', (username) => {
//     cy.get('input[name=username]').type(username)
// })

// When('I enter {string} in password field', (password) => {
//     cy.get('input[name=password]').type(password)
// })

// When('I enter {int} in password field', (password) => {
//     cy.get('input[name=password]').type(password)
// })
When(/I enter "(.*)" in (username|password) field/, (text, field) => {
    cy.get(`input[name=${field}]`).type(text)
})

import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

Given(`I am in login page`, () => {
    // [Given] Sets up the initial state of the system.
});

When(`I enter valid username and password`, () => {
    // [When] Describes the action or event that triggers the scenario.
});

When(`I click on login button`, () => {
    // [When] Describes the action or event that triggers the scenario.
});

Then(`I should see be able to create a branch`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Then(`I should see me`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Given(`i am able to login to the page`, () => {
    // [Given] Sets up the initial state of the system.
});

When(`I create a voucher head`, () => {
    // [When] Describes the action or event that triggers the scenario.
});

Then(`I should be able to view them in the Voucher head list`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});