class SingIn_PO {
    EmailTxtBox() {
        return cy.get('#email_create');
    }
    createAccountBtn() {
        return cy.get('#SubmitCreate');
    }
}
export default SingIn_PO;