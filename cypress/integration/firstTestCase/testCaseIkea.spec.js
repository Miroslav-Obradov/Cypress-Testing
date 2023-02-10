/// <reference types="cypress" />

let cred = Math.floor(new Date() / 1000);
let phone = parseInt(cred / 1000)
let email = "test" + cred + "@gmail.com"

describe('Ikea registration', () => {

      
        beforeEach(()=>{
            cy.visit("https://www.ikea.com/rs/sr/profile/signup/",
            { failOnStatusCode: false });
            cy.wait(2000)
        })
    it('Ikea registracija', () =>{
      cy.get('.sc-htpNat').should('be.visible')
        //cy.get('[id="family-signup-form-profileType-family-option"]').click();
      cy.get('[id="family-signup-form-firstName"]').type("Micha");
      cy.get('[id="family-signup-form-lastName"]').type("Doe");
      cy.get('[id="family-signup-form-birthDate"]').type("25-10-1984");
      cy.get('[class="select-value"]').within(() => {
        cy.contains('RS (+381) ').click();
    });
      cy.get('[id="family-signup-form-phoneNumber"]').type("64" + phone);
      cy.get('[id="family-signup-form-addressCountryCode"]').select('Srbija (Serbia)');
        cy.get('[id="family-signup-form-address"]').type("bulevar milutina").within(() => {
          cy.contains("Ulica ");
        });
      cy.get('[id="family-signup-form-email"]').type(email);
      cy.get('[id="family-signup-form-password"]').type("1234567eP!");
      cy.get('[id="family-signup-form-acceptTermsAndConditions"]').click();
      cy.get('[id="family-signup-form-acceptPrivacyPolicy"]').click();
      cy.get('[id="singup-form-submit-button"]').click();
   
     
      
      });
    });

 
  
