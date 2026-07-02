import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/HomePage'

test('test @smoke', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  const loginPage = new LoginPage(page)
  await loginPage.enterUserName(process.env.TEST_USERNAME!)
  await loginPage.enterPassword(process.env.TEST_PASSWORD!)
  await loginPage.selectFormOption()
  await loginPage.clickCheckbox()
  await loginPage.clickLogin()
  await page.waitForTimeout(2000)
});