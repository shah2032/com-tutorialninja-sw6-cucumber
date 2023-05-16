package com.tutorialsninja.steps;

import com.tutorialsninja.pages.MyAccountLoginPage;
import com.tutorialsninja.pages.MyAccountPage;
import com.tutorialsninja.pages.MyAccountRegisterPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class AccountLoginPageSteps {
    @When("^I click on My Account link$")
    public void iClickOnMyAccountLink() {
        new MyAccountPage().clickOnMyAccountTab();
    }

    @And("^I click on Login button$")
    public void iClickOnLoginButton() {
        new MyAccountPage().selectMyAccountOptions("Login");
    }

    @Then("^I should navigate to login page successfully and I should see text Returning Customer$")
    public void iShouldNavigateToLoginPageSuccessfullyAndIShouldSeeTextReturningCustomer() {
        String expected = "Returning Customer";
        String actual = new MyAccountPage().getReturningCustomerText();
        Assert.assertEquals(expected, actual, "Not displayed");
    }

    @Then("^I enter email in email field$")
    public void iEnterEmailInEmailField() {
        new MyAccountLoginPage().enterEmailAddress();
    }

    @And("^I enter password in password field$")
    public void iEnterPasswordInPasswordField() {
        new MyAccountLoginPage().enterValidPassword();
    }

    @And("^I click on login$")
    public void iClickOnLogin() {
        new MyAccountLoginPage().clickOnLoginButton();
    }

    @Then("^I should see text My Account$")
    public void iShouldSeeTextMyAccount() {
        String expected = "My Account";
        String actual = new MyAccountLoginPage().getMyAccountText();
        Assert.assertEquals(expected, actual, "Not displayed");
    }

    @And("^I click on My Account$")
    public void iClickOnMyAccount() {
        new MyAccountPage().clickOnMyAccount1();
    }

    @And("^I click on Account Log Out$")
    public void iClickOnAccountLogOut() {
        new MyAccountPage().selectMyAccountOptions("Logout");
    }

    @And("^I should see text Account Logout$")
    public void iShouldSeeTextAccountLogout() {
        String expected = "Account Logout";
        String actual = new MyAccountRegisterPage().getAccountLogoutText();
        Assert.assertEquals(expected, actual, "Not displayed");
    }

    @Then("^I click on Continue button$")
    public void iClickOnContinueButton() {
        new MyAccountRegisterPage().clickOnContinueButtonAgain();
    }

}
