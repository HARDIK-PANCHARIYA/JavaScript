// WAP to print even and odd numbers and also addition upto range

var num1=parseInt(prompt("Enter Number1 = "));
var num2=parseInt(prompt("Enter Number2 = "));
var counteven=0;
var countodd=0;

for(var i=num1; i<=num2; i++){
    if(i%2==0){
        counteven+=i;
        document.write(`even number ---- ${i} &nbsp`);
    }else{
        countodd+=i;
        document.write(`odd number --- ${i} &nbsp`);
    }
}

document.write(`<br> Addition of even number = ${counteven}<br>`);
document.write(`Addition of odd number = ${countodd}`);