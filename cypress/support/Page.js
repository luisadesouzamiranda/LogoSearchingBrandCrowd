import Browser from "../support/Browser";
class Page {
  static elementContainsText(text) {
    return cy.contains(text);
  }
  static clickElement(selector, text) {
    cy.get(selector).contains(text).click({ force: true });
  }
}
export default Page;
