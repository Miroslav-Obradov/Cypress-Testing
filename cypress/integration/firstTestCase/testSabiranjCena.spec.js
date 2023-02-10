/// <reference types="cypress" />

describe('Sabiranje popusta', () => {

    beforeEach(()=>{
        cy.visit("https://automationteststore.com/",
        { failOnStatusCode: false });
        cy.wait(2000)
    })

    it('Vrednost popusta', () =>{

        //cy.get('[class="pricenew"]').each(($ele) => {
            let sum = 0;

            cy.get('[class="pricenew"]')
            .each(($title, index, $titles) => {
              sum += parseInt($title.text());

          if (index === $title.length - 1) {
         cy.log(sum)
          
        }
      });
       
    });    
        
});