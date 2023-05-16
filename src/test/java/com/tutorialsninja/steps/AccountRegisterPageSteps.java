package com.tutorialsninja.steps;

import com.tutorialsninja.pages.MyAccountPage;
import com.tutorialsninja.pages.MyAccountRegisterPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class AccountRegisterPageSteps {
    @And("^I click on Register button$")
    public void iClickOnRegisterButton() {
        new MyAccountPage().selectMyAccountOptions("Register");
    }

    @Then("^I should navigate to Register Page Successfully and I should see text Register Account$")
    public void iShouldNavigateToRegisterPageSuccessfullyAndIShouldSeeTextRegisterAccount() {
        String expected = "Register Account";
        String actual = new MyAccountPage().getRegisterAccountText();
        Assert.assertEquals(expected, actual, "Not displayed");
    }

    @Then("^I enter First name$")
    public void iEnterFirstName() {
        new MyAccountRegisterPage().enterFirstName();
    }

    @And("^I enter Last name$")
    public void iEnterLastName() {
        new MyAccountRegisterPage().enterLastName();
    }

    @And("^I enter email$")
    public void iEnterEmail() {
        new MyAccountRegisterPage().enterEmail();
    }

    @And("^I enter telephone$")
    public void iEnterTelephone() {
        new MyAccountRegisterPage().enterTelephone();
    }

    @And("^I enter password$")
    public void iEnterPassword() {
        new MyAccountRegisterPage().enterPassword();
    }

    @And("^I enter Confirm password$")
    public void iEnterConfirmPassword() {
        new MyAccountRegisterPage().enterConfirmPassword();
    }

    @And("^I select Yes radio button for subscribe$")
    public void iSelectYesRadioButtonForSubscribe() {
        new MyAccountRegisterPage().selectSubscribeYesRadioButton();
    }

    @And("^I Click on Privacy Policy check box$")
    public void iClickOnPrivacyPolicyCheckBox() {
        new MyAccountRegisterPage().clickPrivacyPolicyCheckbox();
    }

    @And("^I Click on Continues button$")
    public void iClickOnContinuesButton() {
        new MyAccountRegisterPage().clickOnContinueButton();
    }

    @Then("^I should see message Your Account Has Been Created!$")
    public void iShouldSeeMessageYourAccountHasBeenCreated() {
        String expected = "Your Account Has Been Created!";
        String actual = new MyAccountRegisterPage().getAccountHasBeenCreatedText();
        Assert.assertEquals(expected, actual, "Not displayed");
    }

    @And("^I click on Click on Continue button again$")
    public void iClickOnClickOnContinueButtonAgain() {
        new MyAccountRegisterPage().clickOnContinueButtonAgain();
    }
}
