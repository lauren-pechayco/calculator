// Calculator Program

const display = document.getElementById("display");
let error = false;

function appendToDisplay(input) {
    if(error) {
        return;
    }
    display.value += input;
}

function clearDisplay() {
    display.value = "";
    error = false;
}

function calculate() {
    try{
        if(error) return;
        display.value = eval(display.value);
    }
    catch (e) {
        error = true;
        display.value = "Error";
    }
}