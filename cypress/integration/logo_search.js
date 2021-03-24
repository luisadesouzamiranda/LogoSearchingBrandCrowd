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
    SearchLogo.navigateTo(this.testdata.url);
    Page.elementContainsText(this.testdata.logoPage);
    SearchLogo.clickButton('*[class="button alert"]', "create");
    SearchLogo.checkIfSearchHasResult(".responsive-embed");
  });

  it("Search should return result with Business name searching criteria", function () {
    SearchLogo.inputBusinessName("#gtm-SearchText", this.testdata.businessName);
    SearchLogo.clickButton('*[class="button alert"]', "create");
    SearchLogo.checkIfResultRelevant(
      ".responsive-embed__image",
      `text=${this.testdata.businessName}`
    );
    SearchLogo.clickBackonBrowser();
  });
});
