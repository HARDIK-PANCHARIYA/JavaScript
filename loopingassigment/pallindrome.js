
var num1=parseInt(prompt("Enter Number = "));
var num2=num1;
var rev=0;

if(num1<=9){
    document.write(`<span class="spam1"> Number is pallindrome  ${num1} </span>`);
}else{
    while(num1>0){
    var rem=num1%10;
    rev+=rem;
    rev*=10;
    num1=Math.floor(num1/10);
    }
    rev/=10

    if(rev==num2){
        document.write(`<span class="spam1"> Number is pallindrome </span>`);
    }
    else{
        document.write(`<span class="spam1"> Number is not pallindrome </span>`);
    }

}