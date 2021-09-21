describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
})

it ('7 + 2 equals 9', () => {
    //1. Arrange -- where?
    cy.visit("http://127.0.0.1:5502/index.html");

    //2. Act -- what we want to test
    cy.get('[data-cy=seven]').click();
    cy.get('[data-cy=plus]').click();
    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=equals]').click();

    //3. Assert -- what the result will be 
    cy.get('[data-cy=display1]').should("have.text", "9");
})

it ('8 - 2 equals 6', () => {
    //1. Arrange -- location
    cy.visit("http://127.0.0.1:5502/index.html");

    cy.get('[data-cy=eight]').click();
    cy.get('[data-cy=minus]').click();
    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=equals]').click();

    cy.get('[data-cy=display1]').should("have.text", "6");
})

it ('9 * 3 equals 27', () => {
    //1. Arrange -- location
    cy.visit("http://127.0.0.1:5502/index.html");

    cy.get('[data-cy=nine]').click();
    cy.get('[data-cy=multiply]').click();
    cy.get('[data-cy=three]').click();
    cy.get('[data-cy=equals]').click();

    cy.get('[data-cy=display1]').should("have.text", "27");
})

it ('10 / 2 equals 5', () => {
    //1. Arrange -- location
    cy.visit("http://127.0.0.1:5502/index.html");

    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=divide]').click();
    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=equals]').click();

    cy.get('[data-cy=display1]').should("have.text", "5");
})