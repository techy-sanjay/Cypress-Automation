import 'cypress-iframe';
import visit from "/cypress/features/visit.js";
import "/cypress/support/commands.js";

describe('My First Test', () => {
    let Input, Selector;
    before('visit', () => {
        cy.fixture('input.json').then((data) => {
            Input = data;
        });
        cy.fixture('Selector.json').then((data1) => {
            Selector = data1;
        });
    });
    const obj = new visit;
    beforeEach('visit', () => {
        obj.visitpage(Selector, Input);
    });
    it('TestCase : 1 : Verify the ability to Switch to the list view display', () => {
        cy.MensCategory(Selector, Input);
        cy.View(Selector, Input);
    })
    it('TestCase : 2 : Verify the ability to select the Category', () => {
        cy.MensCategory(Selector, Input);
    })
    it('TestCase : 3 : Verify the ability to select the list view', () => {
        cy.Search(Selector, Input);
    })
    it('TestCase : 4 : Verify the ability to change the pagination limiter.', () => {
        cy.MensCategory(Selector, Input);
        cy.Pagination(Selector, Input);
    })
    it('TestCase : 5 : Verify the ability to sorting', () => {
        cy.MensCategory(Selector, Input);
        cy.Sort(Selector, Input);
    })
    it('TestCase : 6 : Verify the able to click the size and colour', () => {
        cy.MensCategory(Selector, Input);
        cy.SizeAndColour(Selector, Input);
    })
    it('TestCase : 7 : Verify the able to addToCart', () => {
        cy.MensCategory(Selector, Input);
        cy.SizeAndColour(Selector, Input);
        cy.AddToCart(Selector, Input);
    })
    it('TestCase : 8 : Verify the able to update the Cart', () => {
        cy.MensCategory(Selector, Input);
        cy.SizeAndColour(Selector, Input);
        cy.AddToCart(Selector, Input);
        cy.UpdateCart(Selector, Input);
    })
    it('TestCase : 9 : Verify the able to Delete the Cart.', () => {
        cy.MensCategory(Selector, Input);
        cy.SizeAndColour(Selector, Input);
        cy.AddToCart(Selector, Input);
        cy.DeleteCart(Selector, Input);
    })
    it('TestCase : 10 : Verify the able to Place the Order', () => {
        cy.MensCategory(Selector, Input);
        cy.SizeAndColour(Selector, Input);
        cy.AddToCart(Selector, Input);
        cy.PlaceOrder(Selector, Input);
    })
})