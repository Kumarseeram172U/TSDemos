# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> test
- Location: tests\example.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.isChecked: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.terms')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - link "Free Access to InterviewQues/ResumeAssistance/Material" [ref=e3] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/documents-request
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e4] [cursor=pointer]:
      - /url: https://techsmarthire.com/
  - generic [ref=e5]:
    - heading [level=3] [ref=e6]:
      - img [ref=e8]
    - generic [ref=e14]:
      - generic [ref=e15]:
        - generic [ref=e16]: "Username:"
        - textbox "Username:" [ref=e17]: rahulshettyacademy
      - generic [ref=e18]:
        - generic [ref=e19]: "Password:"
        - textbox "Password:" [active] [ref=e20]: Learning@830$3mK2
      - generic [ref=e22]:
        - generic [ref=e23] [cursor=pointer]:
          - text: Admin
          - radio "Admin" [checked] [ref=e24]
        - generic [ref=e26] [cursor=pointer]:
          - text: User
          - radio "User" [ref=e27]
      - combobox [ref=e30]:
        - option "Student"
        - option "Teacher" [selected]
        - option "Consultant"
      - generic [ref=e31]:
        - generic [ref=e32]:
          - checkbox "I Agree to the terms and conditions" [ref=e34]
          - generic [ref=e35]:
            - text: I Agree to the
            - link "terms and conditions" [ref=e36] [cursor=pointer]:
              - /url: "#"
        - button "Sign In" [ref=e37] [cursor=pointer]
      - paragraph [ref=e39]:
        - text: (username is
        - generic [ref=e40]: rahulshettyacademy
        - text: and Password is
        - generic [ref=e41]: Learning@830$3mK2
        - text: )
```

# Test source

```ts
  1  | import {Page,Locator} from '@playwright/test'
  2  | 
  3  | export class LoginPage{
  4  | 
  5  |     private readonly page: Page;
  6  |     // private readonly loginlink:Locator;
  7  |     private readonly userNameInput:Locator;
  8  |     private readonly passwordInput:Locator;
  9  |     private readonly loginButton:Locator;
  10 |     private readonly selectOption:Locator;
  11 |     private readonly checkBox:Locator;
  12 | 
  13 |     constructor(page:Page){
  14 |         this.page = page;
  15 |         this.userNameInput = this.page.getByLabel("Username:");
  16 |         this.passwordInput = this.page.getByLabel("Password:");
  17 |         this.selectOption = this.page.locator('select.form-control');
  18 |         this.checkBox = this.page.locator(".terms")
  19 |         this.loginButton = this.page.getByText("Sign In");
  20 | 
  21 | 
  22 |     }
  23 | 
  24 |     async enterUserName(username:string){
  25 |         await this.userNameInput.clear()
  26 |         await this.userNameInput.fill(username)
  27 |     }
  28 | 
  29 |     async enterPassword(password:string){
  30 |         await this.passwordInput.clear()
  31 |         await this.passwordInput.fill(password)
  32 |     }
  33 | 
  34 |     async selectFormOption(){
  35 |         await this.selectOption.selectOption({ label:'Teacher'})
  36 |     }
  37 | 
  38 |     async clickCheckbox(){
> 39 |         const isChecked = await this.checkBox.isChecked();
     |                                               ^ Error: locator.isChecked: Test timeout of 30000ms exceeded.
  40 |         if (!isChecked) {
  41 |             await this.checkBox.click();
  42 |         }
  43 |         
  44 |     }
  45 | 
  46 |     async clickLogin(){
  47 |         await this.loginButton.click()
  48 |     }
  49 | 
  50 | }
```