import HomePage_PO from '../support/PagesObject/HomePage_PO';
import SignIn_PO from '../support/PagesObject/SignIn_PO';
import Register_PO from '../support/PagesObject/Register_PO';
import GenericMethods from '../support/PagesObject/GenericMethods';
describe('Register user and validate', () => {
  const homeobj = new HomePage_PO();
  const signInobj = new SignIn_PO();
  const registerobj = new Register_PO();
  const genericMethods = new GenericMethods();
  const env = Cypress.env();

  before(() => {
    cy.NavigateTOPortal();
    homeobj.signInBtn().click();
    signInobj.EmailTxtBox().type(genericMethods.generate_random_string(8) + '@email.com');
    signInobj.createAccountBtn().click();
  })
  it('Validate Password is Required', () => {
    cy.wait(5000)
    registerobj.selectGenderBtn().check()
    registerobj.firstNameTxt().type(env.FirstName)
    registerobj.secondNameTxt().type(env.LastName)
    registerobj.birthdateDaySelect().select(env.BD_Day)
    registerobj.birthdateMonthSelect().select(env.BD_Month)
    registerobj.birthdateYearSelect().select(env.BD_Year)
    registerobj.addressTxt().type(env.Address)
    registerobj.stateTxt().type(env.City)
    registerobj.stateSelect().select(env.State)
    registerobj.postCodeTxt().type(env.PostCode)
    registerobj.MobileTxr().type(env.Mobile)
    registerobj.addressAlias().focus().clear().type(env.AddressAlias)
    registerobj.registerBtn().click();
    cy.get('.alert').should('contain.text', 'passwd is required.')
  })

})