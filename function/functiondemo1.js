// WAP to print factorial of given number

// ----- no argument no return type
function fact1()  // function definition
{
    var num = 5;
    var f=1;
    for(var i=1; i<=num; i++){
        f=f*i;
    }
    document.write(`1. no argument no return type ${f} <br>`);

}
fact1()  // function calling

// -------- with argument no return type
function fact2(num)
{
    var f=1;
    for(var i=1; i<=num; i++){
        f=f*i;
    } 
    document.write(`2. with argument no return type ${f} <br>`);
}
fact2(5);

// ------- with argument with return
function fact3(num){
    var f=1;
    for(var i=1; i<=num; i++){
        f=f*i;
    } 
    return f;
}
var result = fact3(5);
document.write(`3. with argument with return ${result} <br>`);

// ----------- no argument with return
function fact4()
{
    var num=5;
    var f=1;
    for(var i=1; i<=num; i++){
        f=f*i;
    }
    return f;
}
document.write(`4. no argument with return ${fact4()} <br>`);
