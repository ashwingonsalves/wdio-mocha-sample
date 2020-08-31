# wdio-mocha-sample
[WebdriverIO](http://webdriver.io/) Integration with BrowserStack.

## Setup
* Clone the repo
* Install dependencies `npm install`
* You can setup environment variables for all sample repos (see Notes) or update `*.conf.js` files inside the `conf/` directory with your [BrowserStack Username and Access Key](https://www.browserstack.com/accounts/settings)

## Running your tests
- To run a local test on your machine using Chrome, run `npm run test`
- To run a single test on BrowserStack, run `npm run browserstack-single`
- To run parallel tests on BrowserStack, run `npm run browserstack-parallel`
- To run a test accessing a local URL on BrowserStack, run `npm run browserstack-local`
- To run parallel tests accessing a local URL on BrowserStack, run `npm run browserstack-local-parallel`
- To run tests on real mobile devices at BrowserStack, run `npm run browserstack-mobile`
## Work in Progress
- To run test using wdio image comparison service on BrowserStack, run `npm run screen-compare`

## Notes
* You can view your test results on the [BrowserStack automate dashboard](https://automate.browserstack.com/dashboard/v2)
* To test on a different set of browsers, check out our [platform configurator](https://www.browserstack.com/automate/node#run-tests-on-desktop-mobile)
* You can export the environment variables for the Username and Access Key of your BrowserStack account
  
  ```sh
  export BROWSERSTACK_USERNAME=<browserstack-username> &&
  export BROWSERSTACK_ACCESS_KEY=<browserstack-access-key>
  ```
  
## Additional Resources
* [Documentation for writing automate test scripts in Node](https://www.browserstack.com/automate/node)
* [Customizing your tests on BrowserStack](https://www.browserstack.com/automate/capabilities)
* [Browsers & mobile devices for selenium testing on BrowserStack](https://www.browserstack.com/list-of-browsers-and-platforms?product=automate)
* [Using REST API to access information about your tests via the command-line interface](https://www.browserstack.com/automate/rest-api)
