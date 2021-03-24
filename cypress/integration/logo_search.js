/// <reference types="cypress" />
import SearchLogo from "../support/SearchLogo";
import Page from "../support/Page";
describe("LogoSearch", () => {
  beforeEach(function () {
    cy.fixture("testdata").then((testdata) => {
      this.testdata = testdata;
    });
  });
  it("Search should return result with no searching criteria", function () {
    const { url, logoPage } = this.testdata;
    SearchLogo.navigateTo(url);
    Page.elementContainsText(logoPage);
    SearchLogo.clickButton('*[class="button alert"]', "create");
    SearchLogo.checkIfSearchHasResult(".responsive-embed");
  });

  it("Search should return result with Business name searching criteria", function () {
    const { businessName } = this.testdata;
    SearchLogo.inputBusinessName("#gtm-SearchText", businessName);
    SearchLogo.clickButton('*[class="button alert"]', "create");
    SearchLogo.checkIfResultRelevant(
      ".responsive-embed__image",
      `text=${businessName}`
    );
    SearchLogo.clickBackonBrowser();
  });
  it("Search should return result with all searching criterias", function () {
    const { businessName, keywords } = this.testdata;
    SearchLogo.clickButton("[id^=filter-bar]", "More");
    SearchLogo.inputBusinessName("#gtm-SearchText", businessName);
    SearchLogo.inputKeywords("#SearchText", keywords);
    SearchLogo.selectDropDown("#LogoStyle", "Icon & Text", "1");
    SearchLogo.checkDropdown("#font-styles-dropdown", "Vintage");
    SearchLogo.checkDropdown("#colors-dropdown", "Grayscale");
    SearchLogo.clickButton('*[class="button alert"]', "create");
    SearchLogo.checkIfResultRelevant(
      ".responsive-embed__image",
      `text=${businessName}`
    );
    SearchLogo.clickBackonBrowser();
  });
  it("Search should not crash when criteria includes non-alphanumeric text", function () {
    const { specialCharacters } = this.testdata;
    SearchLogo.inputBusinessName("#gtm-SearchText", specialCharacters);
    SearchLogo.clickButton('*[class="button alert"]', "create");
    SearchLogo.checkIfSearchHasResult(".responsive-embed");
  });
});
