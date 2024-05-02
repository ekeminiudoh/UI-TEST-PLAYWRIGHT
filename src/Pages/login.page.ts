import { Page, expect } from "@playwright/test";
import helperMethods from "../utils/HelperMethods";
//const dotenv = require('dotenv');

export class LoginPage {
    private page: Page;
    private loginButton: string;
    private username: string;
    private password: string;

    constructor(page: Page) {
        this.page = page;
        this.loginButton = 'input[data-test="login-button"]';
        this.username = 'input[data-test="username"]';
        this.password = 'input[data-test="password"]';
    }

    async launchURL() {
        await helperMethods.navigateTo(this.page, "https://www.saucedemo.com/");
    }

    async login(username: string, password: string) {
        await helperMethods.fill(this.page, this.username, username);
        await helperMethods.fill(this.page, this.password, password);
        await helperMethods.click(this.page, this.loginButton);
        expect(await this.page.title()).toEqual('Swag Labs');
    }
}

