//Declaring basic calculation functions

function plus(a,b)
{
    return a+b;
}
function minus(a,b){
    return a-b;
}
function by(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function root(a,b){
    return Math.pow(a, 1/b)
}


var result = document.getElementById('result')
//Calculate
document.getElementById('button').onclick = function() {
    //Get selected operation
    operator = document.querySelector('.operation:checked').value;
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    
    switch(operator){
        case "plus":
            result.value = plus(a,b)
            break;
        case "minus":
            result.value = minus(a,b)
            break;
        case "by":
            result.value = by(a,b)
            break;
        case "divide":
            result.value = divide(a,b)
            break;
    
        }
    //Assign result to a and clean b
    document.getElementById('a').value = result.value;
    document.getElementById('b').value = "";

};

