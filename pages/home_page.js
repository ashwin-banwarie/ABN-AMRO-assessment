const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {

//constructor is created with elements and their locators that are presented on the homepage
constructor(page){
    this.page = page;
    this.homeMenu = page.locator('//div[@class="home"]');
    this.productsMenu = page.locator('//div[@class="products"]');
    this.contactMenu = page.locator('//div[@class="contact"]');
    this.userIcon = page.locator('//i[@class="fas fa-user-circle"]');
    this.signoutOption = page.locator("//span[normalize-space()='Sign Out']");
    this.bodyText1 = page.locator("//p[contains(text(),'Lorem ipsum egestas posuere vivamus neque facilisi')]");
    this.bodyText2 = page.locator("//p[contains(text(),'Tempus ultrices euismod eros libero posuere aliqua')]");
    this.bodyText3 = page.locator("//p[contains(text(),'Mauris aptent nunc per sociosqu placerat nisi soci')]");
}

//Method to verify if the user icon is visible after login
async verifyUserIcon(){
    await expect(this.userIcon).toBeVisible();
}

//Method for logging out form the application
async logoutFromApplication(){
    await this.userIcon.click();
    await this.signoutOption.click();
}

//Method for verifying if the navigation items are visible on the homepage
async verifyNavigationItems(){
    await expect(this.homeMenu).toBeVisible();
    await expect(this.productsMenu).toBeVisible();
    await expect(this.contactMenu).toBeVisible();
}

//Method for verifying if the content blocks are visible on the homepage
async verifyContentOnHomepage(){
    await expect(this.bodyText1).toBeVisible();
    await expect(this.bodyText2).toBeVisible();
    await expect(this.bodyText3).toBeVisible();
}

}
