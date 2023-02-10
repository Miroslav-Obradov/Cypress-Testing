/// <reference types="cypress" />

describe('Registration', () => {

    it('User is able to register', () => {
        cy.visit("https://halooglasi.com",
        { failOnStatusCode: false });
        cy.wait(2000)
        cy.contains("Uloguj se").click()
        cy.get('[class="no-account-reg-link"]').click()
        cy.contains("Pravnog lica").click()
        cy.get('input[id="UserName"]').type("Miroslav")
        cy.get('input[id="Email"]').type("n@231yas.com")
        cy.get('input[id="Password"]').type("1234151369")
        cy.get('input[id="ConfirmPassword"]').type("1234151369")
        cy.contains("Sledeći korak").click()
    
});
});