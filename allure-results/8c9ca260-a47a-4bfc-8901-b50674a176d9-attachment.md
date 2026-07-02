# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> test
- Location: tests\example.spec.ts:4:5

# Error details

```
Error: locator.selectOption: Error: strict mode violation: locator('.form-control') resolved to 3 elements:
    1) <input type="text" id="username" name="username" class="form-control" data-gtm-form-interact-field-id="0"/> aka getByRole('textbox', { name: 'Username:' })
    2) <input id="password" type="password" name="password" class="form-control"/> aka getByRole('textbox', { name: 'Password:' })
    3) <select class="form-control" data-style="btn-info">…</select> aka getByRole('combobox')

Call log:
  - waiting for locator('.form-control')

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
        - option "Student" [selected]
        - option "Teacher"
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
  11 | 
  12 |     constructor(page:Page){
  13 |         this.page = page;
  14 |         this.userNameInput = this.page.getByLabel("Username:");
  15 |         this.passwordInput = this.page.getByLabel("Password:");
  16 |         this.selectOption = this.page.locator('.form-control');
  17 |         this.loginButton = this.page.getByText("Sign In");
  18 | 
  19 | 
  20 |     }
  21 | 
  22 |     async enterUserName(username:string){
  23 |         await this.userNameInput.clear()
  24 |         await this.userNameInput.fill(username)
  25 |     }
  26 | 
  27 |     async enterPassword(password:string){
  28 |         await this.passwordInput.clear()
  29 |         await this.passwordInput.fill(password)
  30 |     }
  31 | 
  32 |     async selectFormOption(){
> 33 |         await this.selectOption.selectOption({ label:'Teacher'})
     |                                 ^ Error: locator.selectOption: Error: strict mode violation: locator('.form-control') resolved to 3 elements:
  34 |     }
  35 | 
  36 |     async clickLogin(){
  37 |         await this.loginButton.click()
  38 |     }
  39 | 
  40 | }
```