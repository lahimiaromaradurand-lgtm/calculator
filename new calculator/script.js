let display = document.getElementById("display");

function openCalculate(value) {
    display.value += value;
}
function clearCalculate(value) {
    display.value = "";
}
function deleteCalculate(value) {
    display.value = display.value.slice(0, -1);
}

function equal(value) {
    try{
        display.value = eval(display.value);
    }catch{
        display.value  = "Error";
    }
}