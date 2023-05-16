package com.tutorialsninja.steps;

import com.tutorialsninja.pages.CheckoutPage;
import com.tutorialsninja.pages.HomePage;
import com.tutorialsninja.pages.LaptopsAndNotebooksPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LaptopAndNoteBookSteps {
    @When("^I Mouse hover on Laptops & Notebooks Tab and click$")
    public void iMouseHoverOnLaptopsNotebooksTabAndClick() {
        new HomePage().mouseHoverAndClickLaptopsAndNotebooks();
    }

    @And("^I Click on Show All Laptops & Notebooks$")
    public void iClickOnShowAllLaptopsNotebooks() {
        new LaptopsAndNotebooksPage().clickOnShowAllLaptopAndNoteBooks();
    }

    @And("^I Select Sort By Price \\(High > Low\\)$")
    public void iSelectSortByPriceHighLow() {
        new LaptopsAndNotebooksPage().originalProductPrice();
        new LaptopsAndNotebooksPage().sortByPriceHightoLow();

    }

    @Then("^I should see Product price is arrange in High to Low order\\.$")
    public void iShouldSeeProductPriceIsArrangeInHighToLowOrder() {
        new LaptopsAndNotebooksPage().afterSortByPrice();
    }

    @And("^I Select Product MacBook$")
    public void iSelectProductMacBook() {
        new LaptopsAndNotebooksPage().clickOnMacbook();
    }

    @Then("^I should see Product name MacBook$")
    public void iShouldSeeProductNameMacBook() {
        String expected = "MacBook";
        String actual = new LaptopsAndNotebooksPage().getMacbooktext();
        Assert.assertEquals(expected, actual, "Not displayed");
    }

    @And("^I Click on Add To Cart button$")
    public void iClickOnAddToCartButton() {
        new LaptopsAndNotebooksPage().addToCart();
    }

    @Then("^I should see message Success: You have added MacBook to your shopping cart!$")
    public void iShouldSeeMessageSuccessYouHaveAddedMacBookToYourShoppingCart() {
        String expected = "Success: You have added MacBook to your shopping cart!\n" +
                "×";
        String actual = new LaptopsAndNotebooksPage().getSuccesstext();
        Assert.assertEquals(expected, actual, "Not displayed");
    }

    @Then("^I should see Shopping Cart$")
    public void iShouldSeeShoppingCart() {
        String expected = "Shopping Cart  (0.00kg)";
        String actual = new LaptopsAndNotebooksPage().getShoppingCartText();
        Assert.assertEquals(expected, actual, "Not displayed");

    }

    @And("^I should see Product name is MacBook$")
    public void iShouldSeeProductNameIsMacBook() {
        String expected = "MacBook";
        String actual = new LaptopsAndNotebooksPage().getMacbookNameText();
        Assert.assertEquals(expected, actual, "Not displayed");
    }

    @And("^I Change Quantity to (\\d+)$")
    public void iChangeQuantityTo(int arg0) {
        new LaptopsAndNotebooksPage().clearQty();
        new LaptopsAndNotebooksPage().changeQty();
    }

    @And("^I click on Update tab$")
    public void iClickOnUpdateTab() {
        new LaptopsAndNotebooksPage().clickUpdateTab();
    }

    @Then("^I should see message Success: You have modified your shopping cart!$")
    public void iShouldSeeMessageSuccessYouHaveModifiedYourShoppingCart() {
        String expected = "Success: You have modified your shopping cart!\n" +
                "×";
        String actual = new LaptopsAndNotebooksPage().getModifiedSuccessText();
        Assert.assertEquals(expected, actual, "Not displayed");
    }

    @And("^I should see the updated price £(\\d+)\\.(\\d+)$")
    public void iShouldSeeTheUpdatedPrice£(int arg0, int arg1) {
        String expected = "£737.45";
        String actual = new LaptopsAndNotebooksPage().getTotaltext();
        Assert.assertEquals(expected, actual, "Not displayed");
    }

    @And("^I click on Checkout button$")
    public void iClickOnCheckoutButton() {
        new LaptopsAndNotebooksPage().clickCheckout();
    }

    @Then("^I should see text Checkout$")
    public void iShouldSeeTextCheckout() {
        String expected = "Checkout";
        String actual = new LaptopsAndNotebooksPage().getCheckoutText();
        Assert.assertEquals(expected, actual, "Not displayed");
    }

    @And("^I should see text New Customer$")
    public void iShouldSeeTextNewCustomer() throws InterruptedException {
        Thread.sleep(2000);
        String expected = "New Customer";
        String actual = new LaptopsAndNotebooksPage().getNewCustomerText();
        Assert.assertEquals(expected, actual, "Not displayed");
    }

    @And("^I click on Guest Checkout radio button$")
    public void iClickOnGuestCheckoutRadioButton() {
        new LaptopsAndNotebooksPage().clickOnGuestCheckoutButton();
    }

    @And("^I click on Continue tab$")
    public void iClickOnContinueTab() {
        new LaptopsAndNotebooksPage().clickOnContinueButton();
    }

    @Then("^I fill all the mandatory details$")
    public void iFillAllTheMandatoryDetails() {
        new CheckoutPage().enterFirstname();
        new CheckoutPage().enterLastName();
        new CheckoutPage().enterEmail();
        new CheckoutPage().enterTelephone();
        new CheckoutPage().enterAddress();
        new CheckoutPage().enterCity();
        new CheckoutPage().enterPostcode();
        new CheckoutPage().enterCountry();
        new CheckoutPage().enterState();
    }

    @And("^I click on Continue$")
    public void iClickOnContinue() {
        new CheckoutPage().clickContinueButtonguest();
    }

    @And("^I enter Comments about order into text field$")
    public void iEnterCommentsAboutOrderIntoTextField() {
        new CheckoutPage().enterCommentInTextAea();
    }

    @And("^I  Click on check the Terms & Conditions check box$")
    public void iClickOnCheckTheTermsConditionsCheckBox() {
        new CheckoutPage().checkTermsAndCondtionCheckBox();
    }

    @And("^I Click on Continues$")
    public void iClickOnContinues() {
        new CheckoutPage().clickContinueButtonpayment();
    }

    @Then("^I should see message Warning: Payment method required$")
    public void iShouldSeeMessageWarningPaymentMethodRequired() {
        String expected = "Warning: Payment method required!\n" +
                "×";
        String actual = new CheckoutPage().GetWarningMessageText();
        Assert.assertEquals(expected, actual, "Not displayed");
    }
}
