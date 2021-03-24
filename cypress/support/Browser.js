class Browser {
  static goToUrl(url) {
    cy.visit(url);
    cy.url().should("eq", url);
  }
}
export default Browser;
