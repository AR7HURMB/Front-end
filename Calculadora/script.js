var display = document.getElementById("display")

function addCharacter(char) {
    if (display.value != "Error") {
        display.value += char
    }
    else {
        display.value = char
    }
}

function clearDisplay() {
    display.value = ""
}

function calculate() {
    try{
        display.value = eval(display.value)
    }
    catch(error) {
        display.value = "Error"
    }
    if (display.value == "Infinity") {
        display.value = "Error"
    }
}