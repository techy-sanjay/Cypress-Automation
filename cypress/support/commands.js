Cypress.Commands.add('MensCategory', (Selector, Input) => {
    cy.get(Selector.tittle).click()
    cy.get(Selector.hoodies).click()
    cy.get(Selector.base).contains(Input.hoodiesHeading)
})
Cypress.Commands.add('Search', (Selector, Input) => {
    cy.get(Selector.Search).type(Input.pantTittlt).type(Input.Enter)
    cy.wait(5000)
    cy.get(Selector.base).contains(Input.pantTittleResult)
})
Cypress.Commands.add('View', (Selector, Input) => {
    cy.get(Selector.list).click();
    cy.wait(5000)
    cy.get(Selector.list1).should(Input.clicked);
    cy.get(Selector.GridId).should(Input.GridValue);

});

Cypress.Commands.add('Pagination', (Selector, Input) => {
    cy.get(Selector.viewcount).should('have.length',Input.beforeViewCountValue)
    cy.get(Selector.viewCountLimiter).select(Input.selectCount)
    cy.get(Selector.viewcount).should('have.length',Input.afterViewCountValue)
})

Cypress.Commands.add('Sort', (Selector, Input) => {
    cy.get(Selector.sorterId).select(Input.sorterValue)
    cy.wait(10000)
    cy.get(Selector.productId1).eq(0).contains(Input.amount)
})
Cypress.Commands.add('SizeAndColour', (Selector, Input) => {
    cy.get(Selector.productId).click()
    cy.get(Selector.sizeId).click().click().click()
    cy.get(Selector.colourId).click()
    cy.get(Selector.imgId1).should(Input.imgAssertion)
})
Cypress.Commands.add('AddToCart', (Selector, Input) => {
    cy.get(Selector.QtyId).clear().type(Input.QtyValue1)
    cy.get(Selector.AddItemId).click()
    cy.wait(5000)
    cy.get(Selector.AddItemMsg).contains(Input.AddItemMsgAss)
})
Cypress.Commands.add('UpdateCart', (Selector, Input) => {
    cy.get(Selector.MyCart).click()
    cy.get(Selector.EditItem).click()
    cy.get(Selector.QtyId).clear().type(Input.QtyValue)
    cy.wait(2000)
    cy.get(Selector.UpdateCart).contains(Input.UpdateCartAss).click()  
    cy.wait(5000)
    cy.get(Selector.UpdateMessage).contains(Input.UpdateMessageAss)
})
Cypress.Commands.add('DeleteCart', (Selector, Input) => {
    cy.get(Selector.MyCart).click()
    cy.get(Selector.EditCart).click()
    cy.get(Selector.DeleteItem).click()
    cy.get(Selector.EmptyItem).contains(Input.EmptyIdMessage)
})
Cypress.Commands.add('PlaceOrder', (Selector, Input) => {
    cy.get(Selector.MyCart).click()
    cy.wait(2000)
    cy.get(Selector.CheckOut).click()
    cy.wait(7500)
    cy.get(Selector.Shipping).contains(Input.ShippingTittle)
})