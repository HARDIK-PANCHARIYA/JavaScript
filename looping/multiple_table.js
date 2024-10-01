

var num1=parseInt(prompt("Enter Number 1 = "));
var num2=parseInt(prompt("Enter Number 2 = "));
var mul;

document.write(`<table border=2 cellpadding=5>`);

for(var i=num1; i<=num2; i++){
    document.write(`<tr>`);

    for(var j=1; j<=10; j++){
        mul=i*j;
        document.write(`<td>${i} * ${j} = ${mul}</td>`)
    }

    document.write(`<tr><br>`)
}

document.write(`</table>`)
