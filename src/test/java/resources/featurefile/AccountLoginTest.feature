Feature: Account Login Page Test
  Background: I am on homepage
@sanity @regression
Scenario: User should navigate to Login Page Successfully
When I click on My Account link
And I click on Login button
Then I should navigate to login page successfully and I should see text Returning Customer

@smoke @regression
Scenario: User Login and Log out Successfully
When I click on My Account link
And I click on Login button
Then I enter email in email field
And I enter password in password field
And I click on login
Then I should see text My Account
And I click on My Account
And I click on Account Log Out
And I should see text Account Logout
Then I click on Continue button