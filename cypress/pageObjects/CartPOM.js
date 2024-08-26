class CartPOM {

    elements = {
        shopTable:() => cy.get('.entry-content > .woocommerce'),
        couponCodeField:() => cy.get('#coupon_code'),
        applyCouponBtn:() => cy.get('.coupon > .button'),
        subtotal:() => cy.get('.cart-subtotal > td > .woocommerce-Price-amount > bdi'),
        alertMessage:() => cy.get('#post-5 > div > div > div.woocommerce-notices-wrapper'),
        removeIcon:() => cy.get('.remove')
    }

    getMessageAlert(){
        return this.elements.alertMessage().text()
    }

    getSubtotal(){
        return parseElemntToDouble(this.elements.subtotal)
    }

    applyCoupon(){
        this.elements.applyCouponBtn().click()
    }

    parseElemntToDouble(element){
        return Double.parseDouble(element.text().substring(1))
    }

}

export default CartPOM