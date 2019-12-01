import {HomePage} from "../pages/home-page";

describe('search books', () => {

  const homePage = new HomePage()

  beforeEach(() => {
    homePage.navigate()
  })

  it('should be able to looking for some book', () => {
    homePage.searchBook('test automation in the real world')
    homePage.verifyProductList('Test Automation in the Real World')
    homePage.verifyProductList('Experiences of Test Automation', false)
  })

  it('should match the price', () => {
    homePage.searchBook('agile testing')
    homePage.verifyProductList('Agile Testing')
    homePage.verifyBookPrice('$49.07')
  })

  describe.skip('visual validation', () => {

    beforeEach(() => cy.eyesOpen({appName: 'BookStore', batchName: "BookStore Testing!"}))
    afterEach(() => cy.eyesClose())

    it('should verify full page', function () {
      // https://applitools.com/tutorials/cypress.html#quick-start
      homePage.searchBook('java')
      homePage.verifyProductList('The Cucumber for Java Book')
      cy.eyesCheckWindow('Full page')
    })

    it('should match the price color', function () {
      homePage.searchBook('java')
      homePage.verifyProductList('The Cucumber for Java Book')
      homePage.verifyColorPrice()
      cy.eyesCheckWindow({
        sizeMode: 'selector', //mode
        selector: homePage.bookPrice //CSS Selector
      })
    })

  })

})
