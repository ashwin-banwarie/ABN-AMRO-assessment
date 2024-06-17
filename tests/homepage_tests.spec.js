import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/login_page'
import { HomePage } from '../pages/home_page'

//this test check if the menu items are visible on the homepage
test('verify navigation items on the homepage', async ({page}) => {

    const loginPage = new LoginPage(page)

    await loginPage.goto()

    await loginPage.logInToApplication('biancunha@gmail.com', '123456')

    const homePage = new HomePage(page)

    await homePage.verifyNavigationItems()
});

//this test check if the contents are visible on the homepage
test('verify the content on the homepage after login', async ({page}) => {

    const loginPage = new LoginPage(page)

    await loginPage.goto()

    await loginPage.logInToApplication('growdev@growdev.com.br', 'growdev123')

    const homePage = new HomePage(page)

    await homePage.verifyContentOnHomepage()
});