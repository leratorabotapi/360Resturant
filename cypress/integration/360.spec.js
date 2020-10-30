context('360 App', () => {
  before(() => {
    cy.visit('http://localhost:8000');
  });

  it('Should Select a Product (from the available items)', () => {
    cy.get('[variant="order_button"]').click();
  });

  it('Should Select Custom Options', () => {
    cy.get('[class="categories-default"]').children().contains('Salad').click();
    cy.get('[class="card-default"]')
      .first()
      .find('[variant="order_button"]')
      .click();
    cy.get('[name="options"]').first().check();
  });

  it('Should Add Custom Notes to Order', () => {
    cy.get('[type="text"]').type('Salad Dressing on the side');
    cy.get('[class="Modal"]').children('[type="button"]').click();
    cy.get('.descriptionSection > .Copy-medium').contains('Salad Dressing on the side')
  });


});
