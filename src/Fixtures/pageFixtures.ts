import { test as base } from '@playwright/test';

import { LoginPage } from '../pages/login.page';
import {ItemsPage} from "../Pages/items.page";

type pageFixtures = {
  itemsPage: ItemsPage;
  loginPage: LoginPage;
};

export const test = base.extend<pageFixtures>({
  itemsPage: async ({ page }, use) => {
    await use(new ItemsPage(page))
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page))
  },
});
