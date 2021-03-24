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
  static clickBackonBrowser() {
    Page.clickBack();
  }
  static inputKeywords(selector, keywords) {
    Page.typeInput(selector, keywords);
  }
  static selectDropDown(selector, text, value) {
    Page.selectDropdownItem(selector, text, value);
  }
  static checkDropdown(selector, text) {
    Page.checkDropdownItem(selector, text);
  }
  static checkIfResultRelevant(selector, text) {
    Page.clickLogo(selector, text);
  }
}
export default SearchLogo;
