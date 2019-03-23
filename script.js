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




function operator(button){
    var val = button.id;
    var a = document.getElementById('a').value;
    var current = document.getElementById('current').value;
    document.getElementById('current').value = current + a + val;

}

// //Calculate
document.getElementById('button').onclick = function() {
    var calc = document.getElementById('current').value;
    document.getElementById('result').value = eval(calc);
    
};

