var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { test } from '@playwright/test';
import { Utils } from "../utils/Utils.js";
let utils;
const url = 'http://127.0.0.1:8081';
const num1 = 12;
const num2 = 34;
const numLong = 123456;
test.beforeEach((_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    utils = new Utils(page);
}));
test('Confirm addition', () => __awaiter(void 0, void 0, void 0, function* () {
    yield utils.addition(url, num1, num2);
}));
test('Confirm subtraction', () => __awaiter(void 0, void 0, void 0, function* () {
    yield utils.subtraction(url, num1, num2);
}));
test('Confirm multiplication', () => __awaiter(void 0, void 0, void 0, function* () {
    yield utils.multiplication(url, num1, num2);
}));
test('Confirm division', () => __awaiter(void 0, void 0, void 0, function* () {
    yield utils.division(url, num1, num2);
}));
test('Confirm clearing', () => __awaiter(void 0, void 0, void 0, function* () {
    yield utils.clearing(url, num1, num2);
}));
test('Validate error', () => __awaiter(void 0, void 0, void 0, function* () {
    yield utils.error(url, numLong);
}));
