/// <reference Types="cypress" />

// visit url to test:

context('JournalInputs on NewEntry', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/new');
  });

  // test (begins always with it and a string building a centence)

  //test if the right url is tested
  it('Shows that the right url is tested (/new)', () => {
    cy.url().should('include', '/new');
  });

  //test page title
  it('Title of page is New entry and has right font and size.', () => {
    cy.get('#page-title')
      .should('contain.text', 'New entry:')
      .and('have.css', 'font-family')
      .should('be', 'Dancing-Script', /cursive/, '32px');
  });

  //test inputs
  it('Should have 9 inputs (text, checkbox).', () => {
    cy.get('*input')
      .parent('Label')
      .siblings()
      .should('have.length', 9);
  });

  it('input field should have placeholder, typing into inputfield title/tags should trigger change and change value', () => {
    cy.get('#title-input')
      .should('have', 'placeholder')
      .type('Hello Cypress!')
      .trigger('change')
      .should('have.value', 'Hello Cypress!');
  });

  //test form
  it.only('submit form should submit entry and url after submit should be submit/confirm', () => {
    cy.get('#submit-form-new')
      .find('#title-input')
      .type('something');

    cy.get('#favCheckbox')
      .check()
      .should('have.value', 'true');

    cy.get('#submit-form-new')
      .submit()
      .url()
      .should('include', '/submit/confirm');
  });

  //test button
  it('click() - click on submit-button should trigger submit', () => {
    cy.get('#sub-btn-new')
      .should('have', 'label')
      .should('have.text', 'submit')
      .trigger('submit');
  });

  //test footer and navigation
  it('NewEntry should have footer', () => {
    cy.get('#footer').should('have.length', '1');
  });

  it('NavLink to landing should have hover state and link to the right url on click.', () => {
    cy.get('#link-landing')
      .invoke('hover')
      .click()
      .url()
      .should('include', 'http://localhost:3000/');
  });

  // test responsive behaviour when viewport changes
  it('cy.viewport() - set the viewport size and dimension', () => {
    // https://on.cypress.io/viewport

    cy.get('*').should('be.visible');
    cy.viewport('iphone-6+', 'portrait');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(200);
    cy.viewport('iphone-6+', 'landscape');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(200);
  });
});
