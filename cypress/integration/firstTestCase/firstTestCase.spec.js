/// <reference types="cypress" />
import homePage from "../../support/pageObject/homePage"
import registerPage from "../../support/pageObject/registerPage"


const HomePage = new homePage()
const RegisterPage = new registerPage()
const data = require("../../fixtures/example.json")

let cred = Math.floor(new Date() / 1000);

describe('Registration', () => {

    beforeEach(()=>{
        cy.visit("https://w.uk.qa.onmapos.com/en/id/g9u7be5Y",
        { failOnStatusCode: false });
        cy.wait(2000)
        HomePage.clickOnRegisterButton()
    });
 
it('User is able to register', () =>{
   
    RegisterPage.typeNameInputField(data.register.name)
    RegisterPage.typeEmailInputField("test" + cred + "@gmail.com")
    RegisterPage.typePhoneNumberInputField(cred)
    RegisterPage.clickOnAgreeCheckbox()
    RegisterPage.clickOnSubmitButton()
    RegisterPage.verifyErrorMessage(data.notificationMessages.successfulRegistration)
});

it('User is unable to register second time with the same email', () => {
  
    RegisterPage.typeNameInputField(data.register.name)
    RegisterPage.typeEmailInputField(data.register.email)
    RegisterPage.typePhoneNumberInputField(cred)
    RegisterPage.clickOnAgreeCheckbox()
    RegisterPage.clickOnSubmitButton()
    RegisterPage.verifyErrorMessage(data.notificationMessages.registeredUser)

});

it('User is unable to register with empty name field', () => {
  
    RegisterPage.typeNameInputField(" ").clear()
    RegisterPage.typeEmailInputField("test" + cred + "@gmail.com")
    RegisterPage.typePhoneNumberInputField(cred)
    RegisterPage.clickOnAgreeCheckbox()
    RegisterPage.clickOnSubmitButton()
    RegisterPage.inputErrorMessage(data.notificationMessages.errorNameMessage)

});

it('User is unable to register with empty email field', () => {
  
    RegisterPage.typeNameInputField(data.register.name)
    RegisterPage.typeEmailInputField(" ").clear()
    RegisterPage.typePhoneNumberInputField(cred)
    RegisterPage.clickOnAgreeCheckbox()
    RegisterPage.clickOnSubmitButton()
    RegisterPage.inputErrorMessage(data.notificationMessages.errorEmailMessage)

});

it('User is unable to register with empty phone field', () => {
  
    RegisterPage.typeNameInputField(data.register.name)
    RegisterPage.typeEmailInputField("test" + cred + "@gmail.com")
    RegisterPage.typePhoneNumberInputField(" ").clear()
    RegisterPage.clickOnAgreeCheckbox()
    RegisterPage.clickOnSubmitButton()
    RegisterPage.inputErrorMessage(data.notificationMessages.errorPhoneMessage)

});

it('User is unable to register with "agree with our Terms & Conditions" checbox unchecked', () => {
  
    RegisterPage.typeNameInputField(data.register.name)
    RegisterPage.typeEmailInputField("test" + cred + "@gmail.com")
    RegisterPage.typePhoneNumberInputField(cred)
    RegisterPage.clickOnSubmitButton()
    RegisterPage.errorAgreeEmptyExistingInternet(data.notificationMessages.errorAgreeTermsMessage)

});

it('User is unable to register with all fields left empty', () => {
  
    RegisterPage.typeNameInputField(" ").clear()
    RegisterPage.typeEmailInputField(" ").clear()
    RegisterPage.typePhoneNumberInputField(" ").clear()
    RegisterPage.clickOnAgreeCheckbox()
    RegisterPage.clickOnSubmitButton()
    RegisterPage.errorAgreeEmptyExistingInternet(data.notificationMessages.errorSubmitEmptyFields)

});

it('User is unable to register second time with the same phone number', () => {
  
    RegisterPage.typeNameInputField(data.register.name)
    RegisterPage.typeEmailInputField("test2" + cred + "@gmail.com")
    RegisterPage.typePhoneNumberInputField(data.register.phoneNumber)
    RegisterPage.clickOnAgreeCheckbox()
    RegisterPage.clickOnSubmitButton()
    RegisterPage.errorAgreeEmptyExistingInternet(data.notificationMessages.registeredUserPhone)

});

it('User is unable to register with invalid 9 phone numbers ', () => {
  
    RegisterPage.typeNameInputField(data.register.name)
    RegisterPage.typeEmailInputField("test3" + cred + "@gmail.com")
    RegisterPage.typePhoneNumberInputField(cred - 1000000000)
    RegisterPage.clickOnAgreeCheckbox()
    RegisterPage.clickOnSubmitButton()
    RegisterPage.inputErrorMessage(data.notificationMessages.errorInvalidPhoneNumber)

});

it('User is unable to register with invalid 12 phone numbers', () => {
  
    RegisterPage.typeNameInputField(data.register.name)
    RegisterPage.typeEmailInputField("test3" + cred + "@gmail.com")
    RegisterPage.typePhoneNumberInputField(100000000000 + cred)
    RegisterPage.clickOnAgreeCheckbox()
    RegisterPage.clickOnSubmitButton()
    RegisterPage.inputErrorMessage(data.notificationMessages.errorInvalidPhoneNumber)

});

it('User is unable to register with character in phone numbers', () => {
  
    RegisterPage.typeNameInputField(data.register.name)
    RegisterPage.typeEmailInputField("test3" + cred + "@gmail.com")
    RegisterPage.typePhoneNumberInputField("a" + cred)
    RegisterPage.clickOnAgreeCheckbox()
    RegisterPage.clickOnSubmitButton()
    RegisterPage.inputErrorMessage(data.notificationMessages.errorInvalidPhoneNumber)

});

it('User is unable to register without @ in email format', () => {
  
    RegisterPage.typeNameInputField(data.register.name)
    RegisterPage.typeEmailInputField("test" + cred + "gmail.com")
    RegisterPage.typePhoneNumberInputField(cred)
    RegisterPage.clickOnAgreeCheckbox()
    RegisterPage.clickOnSubmitButton()
    RegisterPage.inputErrorMessage(data.notificationMessages.errorInvalidEmail)

});

it('User is unable to register without domain in email format', () => {
  
    RegisterPage.typeNameInputField(data.register.name)
    RegisterPage.typeEmailInputField("test" + cred + "@gmail")
    RegisterPage.typePhoneNumberInputField(cred)
    RegisterPage.clickOnAgreeCheckbox()
    RegisterPage.clickOnSubmitButton()
    RegisterPage.inputErrorMessage(data.notificationMessages.errorInvalidEmail)

});

it('User is unable to register with only dot in email domain', () => {
  
    RegisterPage.typeNameInputField(data.register.name)
    RegisterPage.typeEmailInputField("test" + cred + "@gmail.")
    RegisterPage.typePhoneNumberInputField(cred)
    RegisterPage.clickOnAgreeCheckbox()
    RegisterPage.clickOnSubmitButton()
    RegisterPage.inputErrorMessage(data.notificationMessages.errorInvalidEmail)

});

it('User is unable to register with wrong domain format in email (one letter)', () => {
  
    RegisterPage.typeNameInputField(data.register.name)
    RegisterPage.typeEmailInputField("test" + cred + "@gmail.a")
    RegisterPage.typePhoneNumberInputField(cred)
    RegisterPage.clickOnAgreeCheckbox()
    RegisterPage.clickOnSubmitButton()
    RegisterPage.inputErrorMessage(data.notificationMessages.errorInvalidEmail)

});

it('User is unable to register with wrong domain format in email (letter and number)', () => {
  
    RegisterPage.typeNameInputField(data.register.name)
    RegisterPage.typeEmailInputField("test" + cred + "@gmail.A1")
    RegisterPage.typePhoneNumberInputField(cred)
    RegisterPage.clickOnAgreeCheckbox()
    RegisterPage.clickOnSubmitButton()
    RegisterPage.inputErrorMessage(data.notificationMessages.errorInvalidEmail)
});

it('User is unable to register with wrong domain format in email (special charracter)', () => {
  
    RegisterPage.typeNameInputField(data.register.name)
    RegisterPage.typeEmailInputField("test" + cred + "@gmail.co$")
    RegisterPage.typePhoneNumberInputField(cred)
    RegisterPage.clickOnAgreeCheckbox()
    RegisterPage.clickOnSubmitButton()
    RegisterPage.inputErrorMessage(data.notificationMessages.errorInvalidEmail)
});

it('User is unable to register without website name in email', () => {
  
    RegisterPage.typeNameInputField(data.register.name)
    RegisterPage.typeEmailInputField("test" + cred + "@.com")
    RegisterPage.typePhoneNumberInputField(cred)
    RegisterPage.clickOnAgreeCheckbox()
    RegisterPage.clickOnSubmitButton()
    RegisterPage.inputErrorMessage(data.notificationMessages.errorInvalidEmail)
});

it('User is unable to register with special charracter in website name in email', () => {
  
    RegisterPage.typeNameInputField(data.register.name)
    RegisterPage.typeEmailInputField("test" + cred + "@$.com")
    RegisterPage.typePhoneNumberInputField(cred)
    RegisterPage.clickOnAgreeCheckbox()
    RegisterPage.clickOnSubmitButton()
    RegisterPage.inputErrorMessage(data.notificationMessages.errorInvalidEmail)

});

it('User is unable to register offline', () => {
    
   
    RegisterPage.typeNameInputField(data.register.name)
    RegisterPage.typeEmailInputField("test" + cred + "@yu.com")
    RegisterPage.typePhoneNumberInputField(cred)
    RegisterPage.clickOnAgreeCheckbox()
    RegisterPage.clickOnSubmitButton()
    Cypress.automation('remote:debugger:protocol', {
        command: 'Network.emulateNetworkConditions',
        params: {
          offline: true,
          latency: -1,
          downloadThroughput: -1,
          uploadThroughput: -1,
        
        }
        });
    RegisterPage.errorAgreeEmptyExistingInternet(data.notificationMessages.registerFailed)

});
});