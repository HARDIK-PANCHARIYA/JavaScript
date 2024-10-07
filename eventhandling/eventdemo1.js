
var a;
var b;
var result;
function fun(){
    var a = parseInt(prompt("Enter First Number "))
    var b = parseInt(prompt("Enter Second Number "))
    result=a+b;
    alert("Addition = "+result);    
}
function fun1(){
    var a = parseInt(prompt("Enter First Number "))
    var b = parseInt(prompt("Enter Second Number "))
    result=a-b;
    alert(`Substraction = ${result}`);
}
function fun2(){
    var a=parseInt(prompt("Enter First Number "));
    var b=parseInt(prompt("Enter Second Number "))
    result=a*b;
    alert(`Multiplication = ${result}`)
}
function fun3(){
    var a=parseInt(prompt("Enter First Number "));
    var b=parseInt(prompt("Enter Second Number "))
    result=a/b;
    alert(`Division = ${result}`)
}