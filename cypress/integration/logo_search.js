/// <reference types="cypress" />
import SearchLogo from "../support/SearchLogo";

describe("LogoSearch", () => {
  beforeEach(function () {
    cy.fixture("testdata").then((testdata) => {
      this.testdata = testdata;
    });
  });
  it("Search should return result with no searching criteria", function () {
    SearchLogo.navigateTo(this.testdata.url);
  });
});
