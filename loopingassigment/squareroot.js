// WAP to print square of number upto range

var num1=parseInt(prompt("Enter Number1 = "));
var num2=parseInt(prompt("Enter Number2 = "));

for(var i=num1; i<=num2; i++){
    document.write(`Square of ${i} = ${i*i} <br>`);
}