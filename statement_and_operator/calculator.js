// WAP accept e number and one operator form user 
// and print corrosponding operations

var num1=parseInt(prompt("Enter first number ="));
var num2=parseInt(prompt("Enter second number = "));
var opr = prompt("Enter one Operator +, - , *, /, % = ");

if(opr=="+"){
    document.write("Addition n1 + n2 = "+(num1+num2));
}
else if(opr=='-'){
    document.write("Subraction n1 - n2 = "+(num1-num2));
}
else if(opr=='*'){
    document.write("Multiplication n1 * n2 = "+(num1*num2));
}
else if(opr=="/"){
    document.write("Divide n1 / n2 = "+(num1/num2));
}
else if(opr=='%'){
    document.write("Reminder n1 % n2 = "+(num1%num2));
}
else{
    document.write("Enter Valid Input");
}