import { test, expect } from '@playwright/test';
import {Utils} from "../utils/Utils.js";

let utils: Utils;
const url = 'http://127.0.0.1:8081';
const num1 = 12;
const num2 = 34;
const numLong = 123456;


test.beforeEach(async ({page}) => {
  utils = new Utils(page);
})

test('Confirm addition', async () => {
  await utils.addition(url, num1, num2)
});

test('Confirm subtraction', async () => {
  await utils.subtraction(url, num1, num2)
});

test('Confirm multiplication', async () => {
  await utils.multiplication(url, num1, num2)
});

test('Confirm division', async () => {
  await utils.division(url, num1, num2)
});

test('Confirm clearing', async () => {
  await utils.clearing(url, num1, num2)
});

test('Validate error', async () => {
  await utils.error(url, numLong)
});