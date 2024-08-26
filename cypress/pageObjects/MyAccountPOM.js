class MyAccountPOM{
    
    elements = {
        dismissLink: () => cy.get('.woocommerce-store-notice__dismiss-link', {setTimeout: 3000}),
        usernameField: () => cy.get('#username'),
        passwordField: () => cy.get('#password'),
        loginBtn: () => cy.get(':nth-child(3) > .woocommerce-button'),
        loginForm: () => cy.get('#customer_login'),
        accountMenu: () => cy.get('.woocommerce-MyAccount-navigation')
    }

    acceptCookies(){
        this.elements.dismissLink().click()
    }

    login(username, password) {
        this.elements.usernameField().click().clear().type(username)
        this.elements.passwordField().click().clear().type(password)
        this.elements.loginBtn().click()
    }

}

export default MyAccountPOM