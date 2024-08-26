class ShopPOM{

    Products = {
        cap: 'cap',
        belt: 'belt'
    }

    elements = {
        capText:() => cy.get('.post-29 > .woocommerce-LoopProduct-link > .woocommerce-loop-product__title'),
        beltText:() => cy.get('.post-28 > .woocommerce-LoopProduct-link > .woocommerce-loop-product__title'),
        capAddBtn:() => cy.get("a[data-product_id='29']"),
        beltAddBtn:() => cy.get('.post-28 > .button'),
        viewCartLink:() => cy.get('.added_to_cart')
    }

    getCap(){
        return this.elements.capText().text()
    }

    getBelt(){
        return this.elements.beltText().text()
    }

    addProduct(product){
        console.log('addProduct');
        
        switch(product){
            case 'cap':
                console.log('addCap');
                addCap()
                break
            case 'belt':
                addBelt()
                break
        }
        return prodText
    }

    addCap(){
        this.elements.capAddBtn().click()
        // return this.getCap()
    }

    addBelt(){
        this.elements.beltAddBtn().click()
        return this.getBelt()
    }

    viewCart(){
        this.elements.viewCartLink().click()
    }
}

export default ShopPOM