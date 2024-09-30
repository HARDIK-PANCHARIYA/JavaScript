// Write a program to print number in particular range --------- star and end user input 

//eg - 100 t0 200 or 200 to 100

var num1=parseInt(prompt("Enter num1 = "));
var num2=parseInt(prompt("Enter num2 = "));

if(num1<num2){
    for(var i=num1; i<=num2; i++){
        document.write(`${i}<br>`);
    }
}
else{
    for(var i=num1; i>=num2; i--){
        document.write(`${i}<br>`);
    }
}