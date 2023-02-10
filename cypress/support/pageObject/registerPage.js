class registerPage{

    //lokators
    inputNameField(){
        return cy.get('input[name="name"]')
    }
    inputEmailField(){
        return cy.get('input[name="email"]')
    }
    inputPhoneNumberField(){
        return cy.get('input[name="phone"]')
    }
    clickAgreeCheckbox(){
        return cy.get('.v-input--selection-controls')
    }
    clickSubmitButton(){
        return cy.contains("Submit")
    }
    errorMessage(){
        return cy.get('[class*=alert]')
    }
    errorInputMessage(){
        return cy.get('[class*="v-messages"]')
    }
    errorFields(){
        return cy.get('[class="layout column"]')
    }

    //metode
    typeNameInputField(name){
        return this.inputNameField().type(name)
    }
    typeEmailInputField(email){
        return this.inputEmailField().type(email)
    }
    typePhoneNumberInputField(phonenumber){
        return this.inputPhoneNumberField().type(phonenumber)
    }
    clickOnAgreeCheckbox(){
        return this.clickAgreeCheckbox().click()
    }
    clickOnSubmitButton(){
        return this.clickSubmitButton().click()
    }
    verifyErrorMessage(errorMessage){
        this.errorMessage().should("contain.text", errorMessage)
        }
    inputErrorMessage(errorNameMessage){
        return this.errorInputMessage().should("contain.text", errorNameMessage)
    }
    errorAgreeEmptyExistingInternet(errorFields){
        return this.errorFields().should("contain.text", errorFields)
    }
}
    export default registerPage