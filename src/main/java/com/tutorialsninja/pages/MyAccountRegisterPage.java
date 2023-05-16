package com.tutorialsninja.pages;

import com.tutorialsninja.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class MyAccountRegisterPage extends Utility {
    private static final Logger log = LogManager.getLogger(MyAccountRegisterPage.class.getName());

    public MyAccountRegisterPage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(name = "firstname")
    WebElement firstName;

    @CacheLookup
    @FindBy(name = "lastname")
    WebElement lastName;

    @CacheLookup
    @FindBy(name = "email")
    WebElement email;

    @CacheLookup
    @FindBy(name = "telephone")
    WebElement telephone;

    @CacheLookup
    @FindBy(id = "input-password")
    WebElement password;

    @CacheLookup
    @FindBy(id = "input-confirm")
    WebElement confirmPassword;

    @CacheLookup
    @FindBy(xpath = "(//input[@type='radio'])[2]")
    WebElement subscribeRadioButton;

    @CacheLookup
    @FindBy(name = "agree")
    WebElement privacyPolicyCheckBox;

    @CacheLookup
    @FindBy(xpath = "//input[@type='submit']")
    WebElement continueButton;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Your Account Has Been Created!')]")
    WebElement accountHasBeenCreatedText;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Continue')]")
    WebElement clickContinueButton;


    @CacheLookup
    @FindBy(xpath = "//a[text()='Continue']")
    WebElement continue1;
    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='My Account']")
    WebElement myAccountLink;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Account Logout')]")
    WebElement accountLogoutText;

    public void enterFirstName() {
        log.info("Enter first name" + firstName.toString());
        sendTextToElement(firstName, "David");
    }

    public void enterLastName() {
        log.info("Enter last name" + lastName.toString());
        sendTextToElement(lastName, "Moore");
    }

    public void enterEmail() {
        log.info("Enter email" + email.toString());
        sendTextToElement(email, "david123@gmail.com");
    }

    public void enterTelephone() {
        log.info("Enter Telephone" + telephone.toString());
        sendTextToElement(telephone, "7864536221");
    }

    public void enterPassword() {
        log.info("Enter password" + password.toString());
        sendTextToElement(password, "qwe123");
    }

    public void enterConfirmPassword() {
        log.info("Enter confirm password" + confirmPassword.toString());
        sendTextToElement(confirmPassword, "qwe123");
    }

    public void selectSubscribeYesRadioButton() {
        log.info("Click on radio button for subscribe" + subscribeRadioButton.toString());
        clickOnElement(subscribeRadioButton);
    }

    public void clickPrivacyPolicyCheckbox() {
        log.info("Click on privacy check box" + privacyPolicyCheckBox.toString());
        clickOnElement(privacyPolicyCheckBox);
    }

    public void clickOnContinueButton() {
        log.info("Click on continue button" + continueButton.toString());
        clickOnElement(continueButton);
    }

    public String getAccountHasBeenCreatedText() {
        log.info("Get text account is created" + accountHasBeenCreatedText.toString());
        return getTextFromElement(accountHasBeenCreatedText);
    }

    public void clickOnContinueButtonAgain() {
        log.info("Click on continue button" + clickContinueButton.toString());
        clickOnElement(clickContinueButton);
    }

    public void clickOnContinueButton3() {
        log.info("Click on continue button" + continue1.toString());
        clickOnElement(continue1);
    }

    public void clickOnMyAccountLink() {
        log.info("Click on My Account link" + myAccountLink.toString());
        clickOnElement(myAccountLink);
    }

    public String getAccountLogoutText() {
        log.info("Get text account logout" + accountLogoutText.toString());
        return getTextFromElement(accountLogoutText);
    }

}
