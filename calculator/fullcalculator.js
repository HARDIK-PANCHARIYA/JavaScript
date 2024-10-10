
function add(){
var a = parseInt(f1.txt1.value);
var b = parseInt(f1.txt2.value);
var c = a+b;
f1.result.value=c;
}

function sub(){
var a = parseInt(f1.txt1.value);
var b = parseInt(f1.txt2.value);
var c = a-b;
f1.result.value=c;
}

function mul(){
var a = parseInt(f1.txt1.value);
var b = parseInt(f1.txt2.value);
var c = a*b;
f1.result.value=c;
}

function divi(){
var a = parseInt(f1.txt1.value);
var b = parseInt(f1.txt2.value);
var c = a/b;
f1.result.value=c;
}

function clear1(){
    f1.txt1.value=" ";
    f1.txt2.value=" ";
    f1.result.value=" ";
}