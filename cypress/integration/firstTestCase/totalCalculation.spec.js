/// <reference types="cypress" />

 let sum = 0

describe('Basket calculation', () => {

    beforeEach(()=>{
        cy.visit("https://w.uk.qa.onmapos.com/en/id/g9u7be5Y",
        { failOnStatusCode: false });
        cy.wait(2000)
    })
    
    it('Total calculation', () =>{
   const meals = ["BRUSCETTA","TRICOLORE","GOAT”S CHEESE", "GREEK MEZZE",]
   for(let meal of meals.values()){
    cy.addMeal(meal)
   }

    cy.get('p[class=price]').each((element) => {
      sum += Number(element.text())
       })
   
        //cy.wait(1000)
        //cy.get('[class="price no-min"]').invoke('text').then(parseFloat).and('equal', parseFloat(sum).toFixed(2)*1)
        cy.get('[class="mr-2"]').then((element) => {
          expect(Number(sum.toFixed(2))).to.equal(Number(element.text().slice(1)))
        //.invoke('text')
        //.invoke('replace', '£', '')
        //.then(text => +text.replace('£', ''))
       // .and('equal', Number(sum))
    })
  })
})




   
    