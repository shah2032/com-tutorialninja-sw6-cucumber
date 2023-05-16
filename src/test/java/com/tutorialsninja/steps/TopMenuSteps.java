package com.tutorialsninja.steps;

import com.tutorialsninja.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class TopMenuSteps {
    @Then("^I should see text Desktops$")
    public void iShouldSeeTextDesktops() {
        String expected = "Desktops";
        String actual = new HomePage().getDesktopText();
        Assert.assertEquals(expected, actual, "Not displayed");
    }

    @And("^Click on Show All Laptops & Notebooks$")
    public void clickOnShowAllLaptopsNotebooks() {
        new HomePage().selectMenu("Show AllLaptops & Notebooks");
    }

    @Then("^I should see text Laptops & Notebooks$")
    public void iShouldSeeTextLaptopsNotebooks() {
        String expected = "Laptops & Notebooks";
        String actual = new HomePage().getLaptopsNotebooksText();
        Assert.assertEquals(expected, actual, "Not displayed");
    }

    @When("^I Mouse hover on Components Tab and click$")
    public void iMouseHoverOnComponentsTabAndClick() {
        new HomePage().mouseHoverAndClickComponents();
    }

    @And("^I Click on Show All Components$")
    public void iClickOnShowAllComponents() {
        new HomePage().selectMenu("Show AllComponents");
    }

    @Then("^I should see text Components$")
    public void iShouldSeeTextComponents() {
        String expected = "Components";
        String actual = new HomePage().getComponents();
        Assert.assertEquals(expected, actual, "Not displayed");
    }
}
