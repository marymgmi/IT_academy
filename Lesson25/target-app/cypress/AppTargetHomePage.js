class HomePage {
    constructor() {

    } 
    get firstButtonInList() { return cy.get('[data-cy=box-1-items-list] > :nth-child(2)'); }
    get numberSelectedButton() { return cy.get('[data-cy=box-1-selected-name]') }
    get checkboxElement() { return cy.get('[type="checkbox"') }
    get quantityActiveCheckboxes() { return cy.get('span[data-cy="box-2-selected-count"]') }
    get dropdownMenu() { return cy.get('[data-cy="box-3-dropdown"]') }
    get optionSelectedInDropdown() { return cy.get('[data-cy="box-3-selected-name"]'); }
    get buttonForHover() { return cy.get('[data-cy=box-4-items-list] > :nth-child(3)') }
    get numberButtonBeingHovered() { return cy.get('[data-cy=box-4-selected-name]') }
    get pageBackground() { return cy.get('.sc-gzVnrw.kSLSPz'); }

    checkOptionNameInDropdownField(string) {
        this.optionSelectedInDropdown
            .invoke('text')
            .should('equal', string);
    }

    checkNumberSelectedButton(string) {
        this.numberSelectedButton
            .invoke('text')
            .should('equal', string);
    };

    checkChecboxesQuantity(number) {
        this.quantityActiveCheckboxes
            .invoke('text')
            .should('equal', number);
    }

    checkPageBackground (string) {
        this.pageBackground.should('have.css', 'background-color', string);
    }

}

export default new HomePage();
