var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { expect } from '@playwright/test';
class Utils {
    constructor(page) {
        this.page = page;
        this.addButton = page.locator("#add"); //separate class; accept digits as params, 
        this.numOneField = page.locator("#num1");
        this.numTwoField = page.locator("#num2");
        this.resultField = page.locator("#result");
        this.subtractButton = page.locator("#subtract");
        this.multiplyButton = page.locator("#multiply");
        this.divideButton = page.locator("#divide");
        this.clearButton = page.locator("#clear");
        this.errorMessage = page.locator("#error-message");
    }
    addition(url, num1, num2) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.goto(url);
            yield this.numOneField.fill(num1.toString()); // fill expects a string input
            yield this.numTwoField.fill(num2.toString());
            yield this.addButton.click();
            const result = (yield this.resultField.textContent()) || ''; // Default to an empty string if null;
            let expectedResult = num1 + num2;
            if (expectedResult % 1 !== 0) { // If the result has decimals
                expectedResult = parseFloat(expectedResult.toFixed(2));
            }
            expect(parseFloat(result)).toEqual(expectedResult);
        });
    }
    subtraction(url, num1, num2) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.goto(url);
            yield this.numOneField.fill(num1.toString());
            yield this.numTwoField.fill(num2.toString());
            yield this.subtractButton.click();
            const result = (yield this.resultField.textContent()) || '';
            let expectedResult = num1 - num2;
            if (expectedResult % 1 !== 0) { // If the result has decimals
                expectedResult = parseFloat(expectedResult.toFixed(2));
            }
            expect(parseFloat(result)).toEqual(expectedResult);
        });
    }
    multiplication(url, num1, num2) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.goto(url);
            yield this.numOneField.fill(num1.toString());
            yield this.numTwoField.fill(num2.toString());
            yield this.multiplyButton.click();
            const result = (yield this.resultField.textContent()) || '';
            let expectedResult = num1 * num2;
            if (expectedResult % 1 !== 0) { // If the result has decimals
                expectedResult = parseFloat(expectedResult.toFixed(2));
            }
            expect(parseFloat(result)).toEqual(expectedResult);
        });
    }
    division(url, num1, num2) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.goto(url);
            yield this.numOneField.fill(num1.toString());
            yield this.numTwoField.fill(num2.toString());
            yield this.divideButton.click();
            const result = (yield this.resultField.textContent()) || '';
            let expectedResult = num1 / num2;
            if (expectedResult % 1 !== 0) { // If the result has decimals
                expectedResult = parseFloat(expectedResult.toFixed(2));
            }
            expect(parseFloat(result)).toEqual(expectedResult);
        });
    }
    clearing(url, num1, num2) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.goto(url);
            yield this.numOneField.fill(num1.toString());
            yield this.numTwoField.fill(num2.toString());
            yield this.clearButton.click();
            yield expect(this.numOneField).toHaveValue("");
            yield expect(this.numTwoField).toHaveValue("");
        });
    }
    error(url, numLong) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.goto(url);
            yield this.numOneField.fill(numLong.toString());
            yield this.addButton.click();
            yield this.addButton.click();
            yield expect(this.errorMessage).toHaveText("Only numbers between -9999.99 and 9999.99 are allowed.");
        });
    }
}
export { Utils };
