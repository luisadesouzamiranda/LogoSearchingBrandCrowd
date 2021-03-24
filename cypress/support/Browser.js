class Browser {
  static goToUrl(url) {
    cy.visit(url);
    cy.url().should("eq", url);
  }
  static CheckIfPageUrlContains(url) {
    cy.url().should("contains", url);
  }
}
export default Browser;
