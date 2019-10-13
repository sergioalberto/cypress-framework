
export class HomePage {

  // Selectors
  visibleBooks = '.ui-li-has-thumb:not(.ui-screen-hidden)';
  productList = `#productList ${this.visibleBooks}`
  bookPrice = `${this.visibleBooks} .ui-li-aside`

  navigate() {
    cy.visit('https://automationbookstore.dev')
  }

  searchBook(bookToFind){
    cy.get('#searchBar').type(bookToFind)
    cy.get('#productList .ui-screen-hidden')
  }

  verifyProductList(bookToVerify, shouldBePresent = true){
    // https://docs.cypress.io/api/commands/should.html#Syntax
    // https://docs.cypress.io/guides/references/assertions.html#BDD-Assertions
    if (shouldBePresent) {
      cy.get(this.productList).should('contain.text', bookToVerify)
    } else {
      cy.get(this.productList).should('not.contain.text', bookToVerify)
    }
  }

  verifyBookPrice(price){
    cy.get(this.bookPrice).should('contain.text', price)
  }

  verifyColorPrice(){
    cy.get(this.bookPrice).should('have.css', 'background', 'rgb(153, 0, 153) none repeat scroll 0% 0% / auto padding-box border-box')
  }

}