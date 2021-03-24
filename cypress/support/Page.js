import Browser from "../support/Browser";
class Page {
  static elementContainsText(text) {
    return cy.contains(text);
  }
  static clickElement(selector, text) {
    cy.get(selector).contains(text).click({ force: true });
  }
  static typeInput(selector, text) {
    cy.get(selector).clear().type(text);
  }
  static clickLogo(selector, text) {
    cy.get(selector).first().click();
    Navigation.assertCheckIfPageUrlContains(text);
  }
}
export default Page;
