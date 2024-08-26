class AccountMenuPOM{

    elements = {
        logoutBtn: () => cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a'),
        ordersBtn: () => cy.get('.woocommerce-MyAccount-navigation-link--orders > a')
    }

    pressLogout(){
        this.elements.logoutBtn().click()
    }

    pressOrders() {
        this.elements.ordersBtn().click()
    }
}

export default AccountMenuPOM