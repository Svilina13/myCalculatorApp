
import { test, expect, Page, Locator } from '@playwright/test';

class Utils{
    page: Page;
    addButton: Locator;
    subtractButton: Locator;
    divideButton: Locator;
    multiplyButton: Locator;
    numOneField: Locator;
    numTwoField: Locator;
    resultField: Locator;
    clearButton: Locator;
    errorMessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.addButton = page.locator("#add") //separate class; accept digits as params, 
        this.numOneField = page.locator("#num1")
        this.numTwoField = page.locator("#num2")
        this.resultField = page.locator("#result")
        this.subtractButton = page.locator("#subtract")
        this.multiplyButton = page.locator("#multiply") 
        this.divideButton = page.locator("#divide")  
        this.clearButton = page.locator("#clear") 
        this.errorMessage = page.locator("#error-message")
    }

    async addition(url: string, num1: number, num2: number){
        await this.page.goto(url);
      
        await this.numOneField.fill(num1.toString()); // fill expects a string input
        await this.numTwoField.fill(num2.toString());
        await this.addButton.click();
        const result = await this.resultField.textContent() || '';  // Default to an empty string if null;

        let expectedResult = num1+num2
        if (expectedResult % 1 !== 0) {  // If the result has decimals
            expectedResult = parseFloat(expectedResult.toFixed(2));
        }

        expect(parseFloat(result)).toEqual(expectedResult);
    }

    async subtraction(url: string, num1: number, num2: number){
        await this.page.goto(url);

        await this.numOneField.fill(num1.toString()); 
        await this.numTwoField.fill(num2.toString());
        await this.subtractButton.click();
        const result = await this.resultField.textContent() || ''; 

        let expectedResult = num1-num2
        if (expectedResult % 1 !== 0) {  // If the result has decimals
            expectedResult = parseFloat(expectedResult.toFixed(2));
        }

        expect(parseFloat(result)).toEqual(expectedResult);
    }

    async multiplication(url: string, num1: number, num2: number){
        await this.page.goto(url); 

        await this.numOneField.fill(num1.toString()); 
        await this.numTwoField.fill(num2.toString());
        await this.multiplyButton.click();
        const result = await this.resultField.textContent() || '';  

        let expectedResult = num1*num2
        if (expectedResult % 1 !== 0) {  // If the result has decimals
            expectedResult = parseFloat(expectedResult.toFixed(2));
        }

        expect(parseFloat(result)).toEqual(expectedResult);
    }

    async division(url: string, num1: number, num2: number){
        await this.page.goto(url); 

        await this.numOneField.fill(num1.toString()); 
        await this.numTwoField.fill(num2.toString());
        await this.divideButton.click();
        const result = await this.resultField.textContent() || '';  

        let expectedResult = num1/num2
        if (expectedResult % 1 !== 0) {  // If the result has decimals
            expectedResult = parseFloat(expectedResult.toFixed(2));
        }

        expect(parseFloat(result)).toEqual(expectedResult);
    }

    async clearing(url: string, num1: number, num2: number){
        await this.page.goto(url); 

        await this.numOneField.fill(num1.toString()); 
        await this.numTwoField.fill(num2.toString());
        await this.clearButton.click();
      
        await expect(this.numOneField).toHaveValue("");
        await expect(this.numTwoField).toHaveValue("");
    }

    async error(url: string, numLong: number){
        await this.page.goto(url); 

        await this.numOneField.fill(numLong.toString()); 
        await this.addButton.click();
        await this.addButton.click();
        
        await expect(this.errorMessage).toHaveText("Only numbers between -9999.99 and 9999.99 are allowed.")
    }
}

export {Utils};