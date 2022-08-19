import homePage from '../AppTargetHomePage';

Cypress.Commands.add('checkPageBackground', (string) => {
    homePage.pageBackground.should('have.css', 'background-color', string);
  })
