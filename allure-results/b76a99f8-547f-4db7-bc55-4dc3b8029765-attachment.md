# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: csvlogin.spec.ts >> Login test @swamy: valid login
- Location: tests\csvlogin.spec.ts:7:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /angularpractice/
Received string:  "https://rahulshettyacademy.com/loginpagePractise/"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://rahulshettyacademy.com/loginpagePractise/"

```

```yaml
- link "Free Access to InterviewQues/ResumeAssistance/Material":
  - /url: https://rahulshettyacademy.com/documents-request
- link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire":
  - /url: https://techsmarthire.com/
- heading [level=3]:
  - img
- text: "Username:"
- textbox "Username:": kumar
- text: "Password:"
- textbox "Password:": kumar@123
- text: Admin
- radio "Admin" [checked]
- text: User
- radio "User"
- combobox:
  - option "Student"
  - option "Teacher" [selected]
  - option "Consultant"
- checkbox "I Agree to the terms and conditions" [checked]
- text: I Agree to the
- link "terms and conditions":
  - /url: "#"
- button "Sign In"
- paragraph: (username is rahulshettyacademy and Password is Learning@830$3mK2)
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import {DataProvider} from '../utils/dataProvider';
  3  | import {LoginPage} from '../pages/HomePage';
  4  | 
  5  | let filepth:string = "data/logindata.csv"
  6  | for (const data of DataProvider.getTestDataFromCsv(filepth)) {
  7  |   test(`Login test @swamy: ${data.testName}`, async ({ page }) => {
  8  |     const loginPage = new LoginPage(page);
  9  |     await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  10 |     await loginPage.enterUserName(data.username);
  11 |     await loginPage.enterPassword(data.password);
  12 |     await loginPage.selectFormOption()
  13 |     await loginPage.clickCheckbox()
  14 |     await loginPage.clickLogin();
  15 | 
  16 |     if (data.expected === "success") {
> 17 |       await expect(page).toHaveURL(/angularpractice/);
     |                          ^ Error: expect(page).toHaveURL(expected) failed
  18 |     } else {
  19 |       await expect(page.locator('div.alert-danger')).toBeVisible();
  20 |     }
  21 |   });
  22 | }
  23 | 
```