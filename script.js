const display=document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function deleteLastchar(){
    display.value = display.value.slice(0,-1);
}

function calculateDisplay(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "error";
    }
}