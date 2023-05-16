package com.tutorialsninja.pages;

import com.tutorialsninja.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(linkText = "Desktops")
    WebElement mouseHoverDesktop;

    @CacheLookup
    @FindBy(linkText = "Laptops & Notebooks")
    WebElement mouseHoverLaptopsAndNotebooks;

    @CacheLookup
    @FindBy(linkText = "Components")
    WebElement mouseHoverComponents;

    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'Desktops')]")
    WebElement desktopText;

    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'Laptops & Notebooks')]")
    WebElement laptopNotebookText;

    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'Components')]")
    WebElement componentsText;

    @CacheLookup
    @FindBy(xpath = "//nav[@id='menu']//ul/li[contains(@class, 'open')]/div/child::*")
    List<WebElement> selectMenu1;

    public void mouseHoverAndClickDesktops() {
        log.info("Mouse hover and click on desktop" + mouseHoverDesktop.toString());
        mouseHoverToElementAndClick(mouseHoverDesktop);
    }

    public void mouseHoverAndClickLaptopsAndNotebooks() {
        log.info("Mouse hover and click on Laptop and Notebooks" + mouseHoverLaptopsAndNotebooks.toString());
        mouseHoverToElementAndClick(mouseHoverLaptopsAndNotebooks);
    }

    public void mouseHoverAndClickComponents() {
        log.info("Mouse hover and click on Components" + mouseHoverComponents.toString());
        mouseHoverToElementAndClick(mouseHoverComponents);
    }

    public void selectMenu(String menu) {
        try {
            List<WebElement> list = driver.findElements(By.xpath("//nav[@id='menu']//ul/li[contains(@class, 'open')]/div/child::*"));
            for (WebElement listOfElement : list) {
                if (listOfElement.getText().equals(menu)) {
                    listOfElement.click();
                }
            }
        } catch (StaleElementReferenceException e) {
            List<WebElement> list = driver.findElements(By.xpath("//nav[@id='menu']//ul/li[contains(@class, 'open')]/div/child::*"));
        }
        log.info("Select from top menu" + selectMenu1.toString());
    }

    public String getDesktopText() {
        log.info("Get Text Desktop" + desktopText.toString());
        return getTextFromElement(desktopText);
    }

    public String getLaptopsNotebooksText() {
        log.info("Get Text Laptop and Notebooks" + laptopNotebookText.toString());
        return getTextFromElement(laptopNotebookText);
    }

    public String getComponents() {
        log.info("Get Text Components" + componentsText.toString());
        return getTextFromElement(componentsText);
    }
}
