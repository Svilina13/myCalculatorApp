class Functions {
    constructor() {
        this.number1Element = document.getElementById("num1");
        this.number1 = 0; // Initialize to a default value; is here so it can be accessable everywhere
        this.number2Element = document.getElementById("num2");
        this.number2 = 0; // Initialize to a default value
        this.resultOutput = document.getElementById("result");
        this.errorMessage = document.getElementById('error-message');
        this.addition = this.addition.bind(this); //Bind the addition method to the current instance to ensure `this` refers to the class instance when the method is called
        this.clear = this.clear.bind(this);
        this.multiplication = this.multiplication.bind(this);
        this.subtraction = this.subtraction.bind(this);
        this.division = this.division.bind(this);
    }
    setNumber1() {
        this.number1 = parseFloat(this.number1Element.value) || 0;
    }
    setNumber2() {
        this.number2 = parseFloat(this.number2Element.value) || 0;
    }
    addition() {
        this.setNumber1();
        this.setNumber2();
        //this functions could be separate and reusable where the action performed on a number is an argument and result is returned, but thats for later
        if (this.number1 > 9999.99 || this.number1 < -9999.99 || this.number2 > 9999.99 || this.number2 < -9999.99) {
            this.errorMessage.style.display = 'block';
        }
        else {
            this.errorMessage.style.display = 'none';
            let result = this.number1 + this.number2;
            result = parseFloat(result.toFixed(2));
            this.resultOutput.textContent = result.toString(); //truncate
            this.number1Element.value = result.toString();
            this.number1Element.value = '';
        }
    }
    multiplication() {
        this.setNumber1();
        this.setNumber2();
        if (this.number1 > 9999.99 || this.number1 < -9999.99 || this.number2 > 9999.99 || this.number2 < -9999.99) {
            this.errorMessage.style.display = 'block';
        }
        else {
            this.errorMessage.style.display = 'none';
            let result = this.number1 * this.number2;
            result = parseFloat(result.toFixed(2));
            this.resultOutput.textContent = result.toString(); //truncate
            this.number1Element.value = result.toString();
            this.number1Element.value = '';
        }
    }
    subtraction() {
        this.setNumber1();
        this.setNumber2();
        if (this.number1 > 9999.99 || this.number1 < -9999.99 || this.number2 > 9999.99 || this.number2 < -9999.99) {
            this.errorMessage.style.display = 'block';
        }
        else {
            this.errorMessage.style.display = 'none';
            let result = this.number1 - this.number2;
            result = parseFloat(result.toFixed(2));
            this.resultOutput.textContent = result.toString(); //truncate
            this.number1Element.value = result.toString();
            this.number1Element.value = '';
        }
    }
    division() {
        this.setNumber1();
        this.setNumber2();
        if (this.number1 > 9999.99 || this.number1 < -9999.99 || this.number2 > 9999.99 || this.number2 < -9999.99) {
            this.errorMessage.style.display = 'block';
        }
        else {
            this.errorMessage.style.display = 'none';
            let result = this.number1 / this.number2;
            result = parseFloat(result.toFixed(2));
            this.resultOutput.textContent = result.toString(); //truncate
            this.number1Element.value = result.toString();
            this.number1Element.value = '';
        }
    }
    clear() {
        this.number1Element.value = '';
        this.number2Element.value = '';
        this.resultOutput.textContent = '';
        this.errorMessage.style.display = 'none';
    }
    console() {
        console.log("EXECUTE");
    }
}
export { Functions };
