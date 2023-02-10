class homePage{
//lokators
registerButton(){
    return cy.contains("Register")
}

//metode
clickOnRegisterButton(){
    this.registerButton().click()
}
}
export default homePage
