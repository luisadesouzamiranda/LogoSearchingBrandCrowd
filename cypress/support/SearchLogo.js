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
  static inputBusinessName(selector, businessName) {
    Page.typeInput(selector, businessName);
  }
  static checkIfResultRelevant(selector, text) {
    Page.clickLogo(selector, text);
  }
}
export default SearchLogo;
