import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/login_page'
import { HomePage } from '../pages/home_page'

//this test check if it is possible to login and logout to the application
test('login and logout to application', async ({page}) => {

    const loginPage = new LoginPage(page)

    await loginPage.goto()

    await loginPage.logInToApplication('admin@admin.com', '2020')

    const homePage = new HomePage(page)

    await homePage.verifyUserIcon()

    await homePage.logoutFromApplication()

    await loginPage.verifySignOut()
});

//this test check the headertext on the loginpage
test('verify the tekst in the header of the loginpage', async ({page}) => {

    const loginPage = new LoginPage(page)

    await loginPage.goto()

    await loginPage.verifyPageHeaderText()
});

//this test check the footertext on the loginpage
test('verify the tekst in the footer of the loginpage', async ({page}) => {

    const loginPage = new LoginPage(page)

    await loginPage.goto()

    await loginPage.verifyPageFooterText()
});