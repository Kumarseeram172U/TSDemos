import {test,expect} from "@playwright/test"

//syntax for test, fixture are page ,browse
test("title",async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    let titlehead =await page.title();
    console.log(titlehead);
    
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
})