class NavBarPOM{
    
    elements = {
        shopNav: () => cy.get('#menu-item-43 > a'),
        accountNav: () => cy.get('#menu-item-46 > a'),
        checkoutNav: () => cy.get('#menu-item-45 > a'),
        cartNav: () => cy.get('#menu-item-44 > a')
    }

    clickShop() {
        this.elements.shopNav().click()
    }

    clickAccount() {
        this.elements.accountNav().click()
    }

    clickCheckout() {
        this.elements.checkoutNav().click()
    }
    clickCart() {
        this.elements.cartNav().click()
    }
}

export default NavBarPOM