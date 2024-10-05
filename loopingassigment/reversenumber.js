// WAP to Print number in reverse

var num1=parseInt(prompt("Enter Number "));
var rev=0;

if(num1<=9){
    document.write(`orignal number = ${num1} <br>`);
    document.write(`<span class="spam1"> Reverse Number = ${num1} </span>`);
}else{
    document.write(`orignal number = ${num1} <br>`);
    while(num1>0){
        var rem=num1%10;
        rev+=rem;
        rev*=10;
        num1=Math.trunc(num1/10);
    }
    document.write(`<span class="spam1"> Reverse Number = ${Math.floor(rev / 10)} </span>`);
}