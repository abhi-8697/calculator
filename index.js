function clearDisplay(){
    document.getElementById("display").value = "";
}
function appendToDisplay(number){
    document.getElementById("display").value += number;
}
function calculate(){
    document.getElementById("display").value = eval(document.getElementById("display").value);
}

let buttons = document.querySelectorAll("button");
let numberOfButtons = buttons.length;

document.addEventListener("keydown",function(e){
    let validkeys = "0123456789+-*/.";
    if(validkeys.includes(e.key)){
        appendToDisplay(e.key);
    }
    else if(e.key === "=" || e.key === "Enter"){
        calculate();
    }
    else if(e.key === "Backspace" || e.key === "Delete"){
        eraseSingleNumber();
    }
    else if(e.key.toLowerCase() === 'c'){
        clearDisplay();
    }
})
function eraseSingleNumber(){
    display.value = display.value.slice(0, -1)
}