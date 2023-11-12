class visit {
    visitpage(Selector, Input) {
        cy.visit(Input.PageLink);
        cy.title().should('contains', Input.TitleAssertion);
    };
  };
  export default visit;