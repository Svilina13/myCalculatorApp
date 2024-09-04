import {Functions} from "./Functions.js";

const addButton = document.getElementById("add") as HTMLButtonElement
const subtractButton = document.getElementById("subtract") as HTMLButtonElement
const multiplyButton = document.getElementById("multiply") as HTMLButtonElement
const divideButton = document.getElementById("divide") as HTMLButtonElement
const clearButton = document.getElementById("clear") as HTMLButtonElement

const functions = new Functions();

addButton.addEventListener("click", functions.addition)
multiplyButton.addEventListener("click", functions.multiplication)
subtractButton.addEventListener("click", functions.subtraction)
divideButton.addEventListener("click", functions.division)
clearButton.addEventListener("click", functions.clear)

