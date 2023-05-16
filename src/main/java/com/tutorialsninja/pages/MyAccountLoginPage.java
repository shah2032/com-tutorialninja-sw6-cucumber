package com.tutorialsninja.pages;

import com.tutorialsninja.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MyAccountLoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(MyAccountLoginPage.class.getName());

    public MyAccountLoginPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(id = "input-email")
    WebElement emailAddress;
    @CacheLookup
    @FindBy(name = "password")
    WebElement enterPassword;

    @CacheLookup
    @FindBy(xpath = "//input[@value='Login']")
    WebElement loginButton;

    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'My Account')]")
    WebElement myAccountText;

    public void enterEmailAddress() {
        log.info("Enter email" + emailAddress.toString());
        sendTextToElement(emailAddress, "qwe123@gmail.com");

    }

    public void enterValidPassword() {
        log.info("Enter password" + enterPassword.toString());
        sendTextToElement(enterPassword, "abc123");
    }

    public void clickOnLoginButton() {
        log.info("Click on login button" + loginButton.toString());
        clickOnElement(loginButton);
    }

    public String getMyAccountText() {
        log.info("Get Text My account" + myAccountText.toString());
        return getTextFromElement(myAccountText);
    }
}
