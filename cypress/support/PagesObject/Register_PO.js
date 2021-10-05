class Register_PO {
    selectGenderBtn() {
        return cy.get('#id_gender2');
    }
    firstNameTxt() {
        return cy.get('#customer_firstname');
    }
    secondNameTxt() {
        return cy.get('#customer_lastname');
    }
    passwordTxt() {
        return cy.get('#passwd');
    }
    birthdateDaySelect() {
        return cy.get('#days');
    }
    birthdateMonthSelect() {
        return cy.get('#months');
    }
    birthdateYearSelect() {
        return cy.get('#years');
    }
    addressTxt() {
        return cy.get('#address1');
    }
    stateTxt() {
        return cy.get('#city');
    }
    stateSelect() {
        return cy.get('#id_state');
    }
    postCodeTxt() {
        return cy.get('#postcode');
    }
    MobileTxr() {
        return cy.get('#phone_mobile');
    }
    addressAlias() {
        return cy.get('#alias');
    }
    registerBtn() {
        return cy.get('#submitAccount');
    }
}
export default Register_PO;