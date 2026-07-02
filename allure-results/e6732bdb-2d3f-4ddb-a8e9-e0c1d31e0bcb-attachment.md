# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> test
- Location: tests\example.spec.ts:4:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://rahulshettyacademy.com/loginpagePractise/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import {LoginPage} from '../pages/HomePage'
  3  | 
  4  | test('test', async ({ page }) => {
> 5  |   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
     |              ^ Error: page.goto: Target page, context or browser has been closed
  6  |   const loginPage = new LoginPage(page)
  7  |   await loginPage.enterUserName(process.env.TEST_USERNAME!)
  8  |   await loginPage.enterPassword(process.env.TEST_PASSWORD!)
  9  |   await loginPage.selectFormOption()
  10 |   await loginPage.clickCheckbox()
  11 |   await loginPage.clickLogin()
  12 |   await page.waitForTimeout(2000)
  13 | });
```