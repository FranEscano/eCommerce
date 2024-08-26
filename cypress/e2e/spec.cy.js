const { beforeEach } = require("mocha")
import NavBarPOM from "../pageComponent/NavBarPOM"
import AccountMenuPOM from "../pageComponent/accountMenuPOM"
import CartPOM from "../pageObjects/CartPOM"
import MyAccountPOM from "../pageObjects/MyAccountPOM"
import loginDetails from '../fixtures/loginDetails.json'
import MyAccount from "../pageObjects/MyAccountPOM"
import ShopPOM from "../pageObjects/shopPOM"

describe('Buy a product and place the order later', () => {

  const myAccount = new MyAccountPOM()
  const navBar = new NavBarPOM()
  const accountMenu = new AccountMenuPOM()
  const shopper = new ShopPOM()
  const myCart = new CartPOM()

  beforeEach(() => {
    cy.fixture('loginDetails.json').as('login')
  
    cy.visit('https://www.edgewordstraining.co.uk/demo-site/my-account/')
    myAccount.acceptCookies()
    cy.get('@login').then(passData => {
      myAccount.login(passData.username, passData.password)
      cy.log('User entered valid username '+passData.username +" and password " +passData.password)
      myAccount.elements.accountMenu().should('be.visible')
      cy.log('User is logged ins')
    })   
  })

  afterEach(() => {
    navBar.clickAccount()
    accountMenu.pressLogout()
  })

  it('add a product to the cart and apply a coupon code', () => {
    navBar.clickShop()

    shopper.elements.capAddBtn().click()
    shopper.elements.viewCartLink().click()

    myCart.elements.couponCodeField().type('edgewords')
    myCart.elements.applyCouponBtn().click()

    cy.log(myCart.elements.subtotal().invoke('text'))
  })
})