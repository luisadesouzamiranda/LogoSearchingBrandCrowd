import Browser from "../support/Browser";
import Page from "../support/Page";

class SearchLogo {
  static navigateTo(url) {
    Browser.goToUrl(url);
  }
  static clickButton(selector, text) {
    Page.clickElement(selector, text);
  }
  static checkIfSearchHasResult(selector) {
    cy.get(selector);
  }
}
export default SearchLogo;
