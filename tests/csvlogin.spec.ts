import { test, expect } from '@playwright/test';
import {DataProvider} from '../utils/dataProvider';
import {LoginPage} from '../pages/HomePage';

let filepth:string = "data/logindata.csv"
for (const data of DataProvider.getTestDataFromCsv(filepth)) {
  test(`Login test @swamy: ${data.testName}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await loginPage.enterUserName(data.username);
    await loginPage.enterPassword(data.password);
    await loginPage.selectFormOption()
    await loginPage.clickCheckbox()
    await loginPage.clickLogin();

    if (data.expected === "success") {
      await expect(page).toHaveURL(/angularpractice/);
    } else {
      await expect(page.locator('div.alert-danger')).toBeVisible();
    }
  });
}
