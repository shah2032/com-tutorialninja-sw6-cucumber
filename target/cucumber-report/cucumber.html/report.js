$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AccountLoginTest.feature");
formatter.feature({
  "line": 1,
  "name": "Account Login Page Test",
  "description": "",
  "id": "account-login-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14277253601,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 10,
  "name": "User Login and Log out Successfully",
  "description": "",
  "id": "account-login-page-test;user-login-and-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I click on My Account link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter email in email field",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I enter password in password field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see text My Account",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click on My Account",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Account Log Out",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see text Account Logout",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountLoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 521478800,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 577563100,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginPageSteps.iEnterEmailInEmailField()"
});
formatter.result({
  "duration": 161102399,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginPageSteps.iEnterPasswordInPasswordField()"
});
formatter.result({
  "duration": 100416300,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginPageSteps.iClickOnLogin()"
});
formatter.result({
  "duration": 498125500,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginPageSteps.iShouldSeeTextMyAccount()"
});
formatter.result({
  "duration": 10897571300,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d113.0.5672.93)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [2fe74c7bc35937edf3b097a0374f2f3a, findElement {using\u003dxpath, value\u003d//h2[contains(text(),\u0027My Account\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\44741\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52582}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52582/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 2fe74c7bc35937edf3b097a0374f2f3a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.tutorialsninja.utility.Utility.getTextFromElement(Utility.java:62)\r\n\tat com.tutorialsninja.pages.MyAccountLoginPage.getMyAccountText(MyAccountLoginPage.java:51)\r\n\tat com.tutorialsninja.steps.AccountLoginPageSteps.iShouldSeeTextMyAccount(AccountLoginPageSteps.java:47)\r\n\tat ✽.Then I should see text My Account(AccountLoginTest.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AccountLoginPageSteps.iClickOnMyAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountLoginPageSteps.iClickOnAccountLogOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountLoginPageSteps.iShouldSeeTextAccountLogout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountLoginPageSteps.iClickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9627501,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d113.0.5672.93)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [2fe74c7bc35937edf3b097a0374f2f3a, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.93, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\44741\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52582}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52582/devtoo..., se:cdpVersion: 113.0.5672.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 2fe74c7bc35937edf3b097a0374f2f3a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:598)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:318)\r\n\tat com.tutorialsninja.utility.Utility.getScreenshot(Utility.java:333)\r\n\tat com.tutorialsninja.Hooks.tearDown(Hooks.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.uri("AccountRegisterPage.feature");
formatter.feature({
  "line": 1,
  "name": "Account Register Page Test",
  "description": "",
  "id": "account-register-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 32100004400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 12,
  "name": "",
  "description": "",
  "id": "account-register-page-test;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I click on My Account link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter First name",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter Last name",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter email",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter telephone",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Confirm password",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Yes radio button for subscribe",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Click on Privacy Policy check box",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Click on Continues button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see message Your Account Has Been Created!",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I click on Click on Continue button again",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on My Account",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Account Log Out",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "AccountLoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 535557701,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegisterPageSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 1403245400,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegisterPageSteps.iEnterFirstName()"
});
formatter.result({
  "duration": 117898701,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegisterPageSteps.iEnterLastName()"
});
formatter.result({
  "duration": 113522400,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegisterPageSteps.iEnterEmail()"
});
formatter.result({
  "duration": 134558600,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegisterPageSteps.iEnterTelephone()"
});
formatter.result({
  "duration": 119517100,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegisterPageSteps.iEnterPassword()"
});
formatter.result({
  "duration": 105133499,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegisterPageSteps.iEnterConfirmPassword()"
});
formatter.result({
  "duration": 104460700,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegisterPageSteps.iSelectYesRadioButtonForSubscribe()"
});
formatter.result({
  "duration": 90743600,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegisterPageSteps.iClickOnPrivacyPolicyCheckBox()"
});
formatter.result({
  "duration": 84208301,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegisterPageSteps.iClickOnContinuesButton()"
});
formatter.result({
  "duration": 1047983500,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegisterPageSteps.iShouldSeeMessageYourAccountHasBeenCreated()"
});
formatter.result({
  "duration": 80401000,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegisterPageSteps.iClickOnClickOnContinueButtonAgain()"
});
formatter.result({
  "duration": 467648999,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginPageSteps.iClickOnMyAccount()"
});
formatter.result({
  "duration": 179225000,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginPageSteps.iClickOnAccountLogOut()"
});
formatter.result({
  "duration": 805516800,
  "status": "passed"
});
formatter.match({
  "location": "AccountLoginPageSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 558863400,
  "status": "passed"
});
formatter.after({
  "duration": 1487852000,
  "status": "passed"
});
formatter.uri("Desktops.feature");
formatter.feature({
  "line": 1,
  "name": "Desktop Page Test",
  "description": "As a user I want to arrange products add to shopping cart",
  "id": "desktop-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12704635301,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 13,
  "name": "User should add product to cart successfully",
  "description": "",
  "id": "desktop-page-test;user-should-add-product-to-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I mouse hover on Desktop tab and Click",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on Show All Desktop",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Sort By Position Name: A to Z",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select product HP LP3065",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should navigate to product page and should see text HP LP3065",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I select delivery date 2023-11-30",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see message Success: You have added HP LP3065 to your shopping cart!",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I click on link shopping cart display into success message",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see text Shopping Cart",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I click on currency tab",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I change currency to £ sterling",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see text HP LP3065",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I should see the Delivery Date 2023-11-30",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see the model Product21",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I shouldsee total price is £74.73",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopPageSteps.iMouseHoverOnDesktopTabAndClick()"
});
formatter.result({
  "duration": 424309900,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnShowAllDesktop()"
});
formatter.result({
  "duration": 1167128999,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnSortByPositionNameAToZ()"
});
formatter.result({
  "duration": 612790900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 22
    }
  ],
  "location": "DesktopPageSteps.iSelectProductHPLP(int)"
});
formatter.result({
  "duration": 1913059900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 59
    }
  ],
  "location": "DesktopPageSteps.iShouldNavigateToProductPageAndShouldSeeTextHPLP(int)"
});
formatter.result({
  "duration": 60367100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2023",
      "offset": 23
    },
    {
      "val": "11",
      "offset": 28
    },
    {
      "val": "30",
      "offset": 31
    }
  ],
  "location": "DesktopPageSteps.iSelectDeliveryDate(int,int,int)"
});
formatter.result({
  "duration": 11259468200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 88465100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 50
    }
  ],
  "location": "DesktopPageSteps.iShouldSeeMessageSuccessYouHaveAddedHPLPToYourShoppingCart(int)"
});
formatter.result({
  "duration": 351916200,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnLinkShoppingCartDisplayIntoSuccessMessage()"
});
formatter.result({
  "duration": 1542711700,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iShouldSeeTextShoppingCart()"
});
formatter.result({
  "duration": 51317301,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnCurrencyTab()"
});
formatter.result({
  "duration": 111309600,
  "status": "passed"
});
formatter.match({
  "location": "DesktopPageSteps.iChangeCurrencyTo£Sterling()"
});
formatter.result({
  "duration": 982011400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 23
    }
  ],
  "location": "DesktopPageSteps.iShouldSeeTextHPLP(int)"
});
formatter.result({
  "duration": 41145299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2023",
      "offset": 31
    },
    {
      "val": "11",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 39
    }
  ],
  "location": "DesktopPageSteps.iShouldSeeTheDeliveryDate(int,int,int)"
});
formatter.result({
  "duration": 32571400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 30
    }
  ],
  "location": "DesktopPageSteps.iShouldSeeTheModelProduct(int)"
});
formatter.result({
  "duration": 33829800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "74",
      "offset": 28
    },
    {
      "val": "73",
      "offset": 31
    }
  ],
  "location": "DesktopPageSteps.iShouldseeTotalPriceIs£(int,int)"
});
formatter.result({
  "duration": 41948000,
  "status": "passed"
});
formatter.after({
  "duration": 1299903800,
  "status": "passed"
});
formatter.uri("LaptopAndNoteBooks.feature");
formatter.feature({
  "line": 1,
  "name": "Laptop And Notebooks Page Test",
  "description": "",
  "id": "laptop-and-notebooks-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11546643399,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 13,
  "name": "User should place the order successfully",
  "description": "",
  "id": "laptop-and-notebooks-page-test;user-should-place-the-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I Mouse hover on Laptops \u0026 Notebooks Tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I Click on Show All Laptops \u0026 Notebooks",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Select Sort By Price (High \u003e Low)",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Select Product MacBook",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see Product name MacBook",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I Click on Add To Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see message Success: You have added MacBook to your shopping cart!",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click on link shopping cart display into success message",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on currency tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I change currency to £ sterling",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see Shopping Cart",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I should see Product name is MacBook",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Change Quantity to 2",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Update tab",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see message Success: You have modified your shopping cart!",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I should see the updated price £737.45",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on Checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see text Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I should see text New Customer",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Guest Checkout radio button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Continue tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I fill all the mandatory details",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I click on Continue",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter Comments about order into text field",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I  Click on check the Terms \u0026 Conditions check box",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I Click on Continues",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I should see message Warning: Payment method required",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopAndNoteBookSteps.iMouseHoverOnLaptopsNotebooksTabAndClick()"
});
formatter.result({
  "duration": 226216200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookSteps.iClickOnShowAllLaptopsNotebooks()"
});
formatter.result({
  "duration": 707714000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookSteps.iSelectSortByPriceHighLow()"
});
formatter.result({
  "duration": 706393200,
  "status": "passed"
});
formatter.match({
  "location": "LaptopAndNoteBookSteps.iSelectProductMacBook()"
});
