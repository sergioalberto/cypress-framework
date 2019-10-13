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
  });

  it('should match the price', () => {
    homePage.searchBook('agile testing')
    homePage.verifyProductList('Agile Testing')
    homePage.verifyBookPrice('$49.07')
  });

  it('should match the price color', function () {
    homePage.searchBook('java')
    homePage.verifyProductList('The Cucumber for Java Book')
    homePage.verifyColorPrice()
  });

})