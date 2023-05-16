package com.tutorialsninja.steps;

import com.tutorialsninja.pages.DesktopPage;
import com.tutorialsninja.pages.ShoppingCartPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class DesktopPageSteps {
    @When("^I mouse hover on Desktop tab and Click$")
    public void iMouseHoverOnDesktopTabAndClick() {
        new DesktopPage().mouseHoverAndClickDesktops();
    }

    @And("^I click on Show All Desktop$")
    public void iClickOnShowAllDesktop() {
        new DesktopPage().clickOnShowAllDeskTops();
    }

    @And("^I click on Sort By Position Name: Z to A$")
    public void iClickOnSortByPositionNameZToA() {
        new DesktopPage().selectSortByZToA();
    }

    @Then("^I should see products are arranged in Descending Order$")
    public void iShouldSeeProductsAreArrangedInDescendingOrder() {
        new DesktopPage().verifyProductArrangeInDescendingOrder();
    }

    @And("^I click on Sort By Position Name: A to Z$")
    public void iClickOnSortByPositionNameAToZ() {
        new DesktopPage().selectSortByAToZ();
    }

    @And("^I select product HP LP(\\d+)$")
    public void iSelectProductHPLP(int arg0) {
        new DesktopPage().selectProduct();
    }

    @Then("^I should navigate to product page and should see text HP LP(\\d+)$")
    public void iShouldNavigateToProductPageAndShouldSeeTextHPLP(int arg0) {
        String expected = "HP LP3065";
        String actual = new DesktopPage().getHPText();
        Assert.assertEquals(expected, actual, "Not displayed");
    }

    @And("^I select delivery date (\\d+)-(\\d+)-(\\d+)$")
    public void iSelectDeliveryDate(int arg0, int arg1, int arg2) {
        new DesktopPage().selectDeliveryDate();
    }

    @And("^I click on Add to Cart$")
    public void iClickOnAddToCart() {
        new DesktopPage().addToCart();
    }

    @Then("^I should see message Success: You have added HP LP(\\d+) to your shopping cart!$")
    public void iShouldSeeMessageSuccessYouHaveAddedHPLPToYourShoppingCart(int arg0) {
        String expected = "Success: You have added HP LP3065 to your shopping cart!\n" +
                "×";
        String actual = new DesktopPage().getSuccessMessageText();
        Assert.assertEquals(expected, actual, "Not displayed");
    }

    @And("^I click on link shopping cart display into success message$")
    public void iClickOnLinkShoppingCartDisplayIntoSuccessMessage() throws InterruptedException {
        Thread.sleep(1000);
        new ShoppingCartPage().shoppingCartClick();
    }

    @Then("^I should see text Shopping Cart$")
    public void iShouldSeeTextShoppingCart() {
        String expected = "Shopping Cart  (1.00kg)";
        String actual = new DesktopPage().getShoppingcartText();
        Assert.assertEquals(expected, actual, "Not displayed");
    }

    @And("^I click on currency tab$")
    public void iClickOnCurrencyTab() {
        new ShoppingCartPage().clickOnCurrencyTab();
    }

    @And("^I change currency to £ sterling$")
    public void iChangeCurrencyTo£Sterling() {
        new ShoppingCartPage().clickOnPoundSterling();
    }

    @Then("^I should see text HP LP(\\d+)$")
    public void iShouldSeeTextHPLP(int arg0) {
        String expected = "HP LP3065";
        String actual = new DesktopPage().getHPProdcutText();
        Assert.assertEquals(expected, actual, "Not displayed");
    }

    @And("^I should see the Delivery Date (\\d+)-(\\d+)-(\\d+)$")
    public void iShouldSeeTheDeliveryDate(int arg0, int arg1, int arg2) {
        String expected = "Delivery Date:2023-11-30";
        String actual = new DesktopPage().getdeliveryDateText();
        Assert.assertEquals(expected, actual, "Not displayed");
    }

    @And("^I should see the model Product(\\d+)$")
    public void iShouldSeeTheModelProduct(int arg0) {
        String expected = "Product 21";
        String actual = new DesktopPage().getProdcut21Text();
        Assert.assertEquals(expected, actual, "Not displayed");
    }

    @Then("^I shouldsee total price is £(\\d+)\\.(\\d+)$")
    public void iShouldseeTotalPriceIs£(int arg0, int arg1) {
        String expected = "£74.73";
        String actual = new DesktopPage().getTotalCostText();
        Assert.assertEquals(expected, actual, "Not displayed");
    }
}
