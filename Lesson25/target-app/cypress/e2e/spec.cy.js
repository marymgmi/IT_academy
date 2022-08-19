import homePage from '../AppTargetHomePage';


describe('The 4th application page', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/example-4');
    });

    it('check checkbox logic and update text in span', () => {
      homePage.firstButtonInList
      .dblclick();
      expect(homePage.checkNumberSelectedButton('Option Two'));
    })
    
  
  it('check checkbox logic and update text in span', () => {
      homePage.checkboxElement
        .first()
        .check();
      expect(homePage.checkChecboxesQuantity('1'));
  })

  it('check dropdown logic and update text in span', () => {
     homePage.dropdownMenu
        .select('Option Two');
   expect(homePage.checkOptionNameInDropdownField('Option Two'));
})

  it('check mouseover logic and update text in span', () => {
  homePage.buttonForHover
        .trigger('mouseover');
   expect(homePage.numberButtonBeingHovered.contains('Option Three'));
})

it('check background color', () => {
  expect(cy.checkPageBackground('rgb(14, 118, 168)'));
})

})
