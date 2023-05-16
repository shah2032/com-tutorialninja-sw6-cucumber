Feature: Desktop Page Test
  As a user I want to arrange products add to shopping cart
  Background: I am on homepage

  @sanity @regression
  Scenario: User should see Product Arrange in Alphabetical Order from Sort by Option
    When I mouse hover on Desktop tab and Click
    And I click on Show All Desktop
    And I click on Sort By Position Name: Z to A
    Then I should see products are arranged in Descending Order

  @smoke @regression
  Scenario: User should add product to cart successfully
    When I mouse hover on Desktop tab and Click
    And I click on Show All Desktop
    And I click on Sort By Position Name: A to Z
    And I select product HP LP3065
    Then I should navigate to product page and should see text HP LP3065
    And I select delivery date 2023-11-30
    And I click on Add to Cart
    Then I should see message Success: You have added HP LP3065 to your shopping cart!
    And I click on link shopping cart display into success message
    Then I should see text Shopping Cart
    And I click on currency tab
    And I change currency to £ sterling
    Then I should see text HP LP3065
    And I should see the Delivery Date 2023-11-30
    And I should see the model Product21
    Then I shouldsee total price is £74.73
