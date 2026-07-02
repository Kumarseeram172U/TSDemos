import {Page,Locator} from '@playwright/test'

export class LoginPage{

    private readonly page: Page;
    // private readonly loginlink:Locator;
    private readonly userNameInput:Locator;
    private readonly passwordInput:Locator;
    private readonly loginButton:Locator;
    private readonly selectOption:Locator;
    private readonly checkBox:Locator;

    constructor(page:Page){
        this.page = page;
        this.userNameInput = this.page.getByLabel("Username:");
        this.passwordInput = this.page.getByLabel("Password:");
        this.selectOption = this.page.locator('select.form-control');
        this.checkBox = this.page.getByText('I Agree to the')
        this.loginButton = this.page.getByText('Sign In');


    }

    async enterUserName(username:string){
        await this.userNameInput.clear()
        await this.userNameInput.fill(username) 
    }

    async enterPassword(password:string){
        await this.passwordInput.clear()
        await this.passwordInput.fill(password)
    }

    async selectFormOption(){
        await this.selectOption.selectOption({ label:'Teacher'})
    }

    async clickCheckbox(){
        await this.checkBox.click();
        
    }

    async clickLogin(){
        await this.loginButton.click()
    }
}