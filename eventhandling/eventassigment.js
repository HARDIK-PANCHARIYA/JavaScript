
function fact(){
    var input=document.getElementById("userinput").value;
    var num=parseInt(input,10);
    var f=1;
    for(var i=1; i<=num; i++){
        f=f*i;
    }
    document.getElementById("result").textContent = "Result: " + f;
}

function fibo(){
    var input=document.getElementById("userinput").value;
    var num=parseInt(input,10);
    var start=0;
    var end =1;
    document.write(`${start} <br>`);
    for(var i=1; i<=num; i++){
        document.write(`${end} <br>`);
        var temp=start+end;
        start=end;
        end=temp;
    } 
}

function amst(){
    var input=document.getElementById("userinput").value;
    var num=parseInt(input,10);
    var org=num;
    var len=num.toString().length;
    if(len==1){
        document.getElementById("result").textContent = num+" is armstrong numbers ";  
    }else if(len==2){
        document.getElementById("result").textContent = num+" is not armstrong numbers ";
    }else{
        var r=0;
        while(num>0){
            var rem=num%10;
            r=r+rem*rem*rem;
            num=Math.floor(num/10);
        }
        if(org==r){
            document.getElementById("result").textContent = org+" is armstrong numbers ";
        }else{
            document.getElementById("result").textContent = org+" is not armstrong numbers ";
        }
    }
}

function cube(){
    var input=document.getElementById("userinput").value;
    var num=parseInt(input,10);
    var r=num*num*num;
    document.getElementById("result").textContent=`cube of ${num} = ${r} `;
}