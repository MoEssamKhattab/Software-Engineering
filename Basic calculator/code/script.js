
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons input");
operators = ["+", "-", "*", "/", "%", "=" ];
let result = "";

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calc(e.target.value));
});

const calc = (buttonValue) => {
    if (buttonValue === "AC")
        result = "";
    else if (buttonValue === "=" && result !== "")
    // replace % with *0.01 and evaluate and replace ^2 with **2
        result = eval(result.replace("%", "*0.01").replace("^2", "**2").replace(/^0+/, ""));
    else if (operators.includes(buttonValue) && result === "")
        return;
    else if (buttonValue === "")
        result += "0" + buttonValue;
    else
        result += buttonValue;
    
    display.value = result;
};

document.addEventListener("keypress", (e) => {
    if (e.key.match(/[0-9+\-*/%=]/))        // only allow numbers and operators
        calc(e.key);
    else if (e.key === "Backspace" || e.key === "Escape")
        calc("AC");
    else if (e.key === "Delete")
        calc("DEL");
});