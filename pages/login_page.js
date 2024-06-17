const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

//constructor is created with elements and their locators that are presented on the loginpage
constructor(page){
    this.page = page;
    this.usernameInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('//input[@id="login"]');
    this.pageHeader = page.locator('//body//main//h1[1]');
    this.pageFooter = page.locator('//p[normalize-space()="Thank you for participating!"]');
}

//Method to open the applicaton on your local machine in the browser
async goto(){
    await this.page.goto('file:///Users/ashwin.banwarie/Documents/ABN%20AMRO/testautomation-web/index.html');
}

//Method to perform the login to the application
async logInToApplication(username, password){
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
}

//Method to verifying if the sign in button is available after log out
async verifySignOut(){
    await expect(this.loginButton).toBeVisible();
}

//Method to verifing the page header text
async verifyPageHeaderText(){
    await expect(this.pageHeader).toContainText('Automation doesn\'t stop at testing, it\'s just a beginning!');
}

//Method to verifing the page footer text
async verifyPageFooterText(){
    await expect(this.pageFooter).toContainText('Thank you for participating!');
}

}
