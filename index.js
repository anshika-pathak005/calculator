const display = document.querySelector(".result_display")

function appendToDisplay(input){
    display.value += input
}

function clearDisplay(){
    display.value = "";
}
function cutLast(){ 
    display.value = display.value.slice(0, -1); 
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch{
        display.value = "Error";
    }
}