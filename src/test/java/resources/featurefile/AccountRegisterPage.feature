Feature: Account Register Page Test

  Background: I am on homepage

  @sanity @regression
  Scenario: User should navigate to register page successfully
    When I click on My Account link
    And I click on Register button
    Then I should navigate to Register Page Successfully and I should see text Register Account

  @smoke @regression
  Scenario:
    When I click on My Account link
    And I click on Register button
    Then I enter First name
    And I enter Last name
    And I enter email
    And I enter telephone
    And I enter password
    And I enter Confirm password
    And I select Yes radio button for subscribe
    And I Click on Privacy Policy check box
    And I Click on Continues button
    Then I should see message Your Account Has Been Created!
    And I click on Click on Continue button again
    And I click on My Account
    And I click on Account Log Out
    And I click on Continue button