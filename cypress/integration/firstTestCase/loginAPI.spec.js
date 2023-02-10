/// <reference types="cypress" />

describe('Registration', () => {

  beforeEach(()=>{
    cy.visit("https://w.uk.qa.onmapos.com/en/id/g9u7be5Y",
    { failOnStatusCode: false });
    cy.wait(2000)
   
  });
  it('Uspesno API logovanje Picerija', () => {
  cy.request({
    method: 'POST',
    url: 'https://w.uk.qa.onmapos.com/webshopplanet/user/login',
   body: {"userName":"lepotestime@gmail.com","password":"12345678","webShopResourceId":"g9u7be5Y"}
  }).then((response) => {
  cy.log(response.body.uuid)
  cy.clearCookies()
  cy.setCookie('uuid', response.body.uuid)
  expect(response.status).to.eq(200)
  });
});
});
