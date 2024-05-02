import { mergeTests } from "@playwright/test";
import { test as pageFixtures } from "./pageFixtures";

export const test = mergeTests(pageFixtures);