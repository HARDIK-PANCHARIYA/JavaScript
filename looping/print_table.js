// WAP to print any table ---- user input

var num=parseInt(prompt("Enter Number = "));
var mul;
for(var i=1; i<=10; i++){
    mul=num*i;
    document.write(`${num} * ${i} = ${mul} <br>`);
}