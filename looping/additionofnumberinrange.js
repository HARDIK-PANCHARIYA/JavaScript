// WAP to print addition of Number in range --- user input

var num1 = parseInt(prompt("Enter Num1 = "));
var num2 = parseInt(prompt("Enter num2 = "));
var sum=0;

for(var i=num1; i<=num2; i++){
    sum=sum+i;
}

document.write(`Addition of number between ${num1} and ${num2} = ${sum}`);