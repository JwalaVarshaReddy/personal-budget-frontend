describe('home Page tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to login page', () => {
    cy.contains('Login').click();
    cy.url().should('include', '/login');
  });

  it('should navigate to signup page', () => {
    cy.contains('Signup').click();
    cy.url().should('include', '/signup');
  });
});

describe('navigation', () => {

  it('should navigate to dashboard page', () => {
    cy.visit('/dashboard');
    cy.url().should('include', '/dashboard');
  });

  it('should navigate to expense page', () => {
    cy.visit('expense');
    cy.url().should('include', '/expense');
  });

  it('should navigate to budget page', () => {
    cy.visit('budget');
    cy.url().should('include', '/budget');
  });
})

describe('Signup', () => {
  beforeEach(() => {
    cy.visit('/signup');
  });

  it('should fill out signup form and show success message', () => {
    cy.get('#username').type('testUser');
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('password123');
    cy.get('form').submit();

    cy.contains('User Signed Up Successfully click here to Login').should('be.visible');
  });
});

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should fill out login form with incorrect credentials', () => {
    cy.get('#email').type('incorrect@example.com');
    cy.get('#password').type('incorrectpassword');
    cy.get('form').submit();

    cy.contains('User is not Present Please Singup').should('be.visible');
  });

  it('should fill out login form with correct credentials and navigate to dashboard', () => {
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('password123');
    cy.get('form').submit();

    cy.url().should('include', '/dashboard');
  });
});
