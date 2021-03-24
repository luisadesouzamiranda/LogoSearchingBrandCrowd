##### LogoSearchingBrandCrowd

##### Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Installing and Running this project](#installing-and-Running-this-project)
- [Test cases](#test-cases)

#### General info

This project is a technical challenge for DeseignCrowd.

#### Technologies

Project is created with:

- Cypress: 6.14.7

#### Installing and Running this project

To run this project, install it locally using npm:

$ git clone https://github.com/luisadesouzamiranda/LogoSearchingBrandCrowd.git

$ cd ../LogoSearchingBrandCrowd

$ npm install

$ npn test

 $ When Cypress opens the test case, click on "Run 1 integration spec"

#### Test cases

TS001 | Search should return results when using none, one or more searching criteria. | Three test cases Automated

TS002 | Search logo result should be relevant to fields Business Name, Key Word, Logo Style, Font Style and Color.

TS003 | Search should not crash if criteria includes special characters or only spaces | One test cases Automated

TS004 | Navigating away by cliking in one logo, and click back on browser or back button, should redirect user to the same page and keep the results.

TS005 | Pagination should keep the searching criteria
