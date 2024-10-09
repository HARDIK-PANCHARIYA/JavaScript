
var para;
function fun(){
    para = document.getElementById("p1");
    // alert(para.innerHTML);
    // document.write(para.innerHTML); ---- redirect to new page not on same page 

    document.getElementById("p3").innerHTML=para.innerHTML;
}
function fun3(){
    var para = document.getElementById("p3");
    para.innerHTML = "";


    // ------------------------ delete the element permently --------------------------- 
    // var para = document.getElementById("p3");
    // para.remove(); 
}

function fun1(){
    var para = document.getElementById("hed1");
    alert(para.innerHTML);

}

function indesign(){

    para=document.getElementById("p1");
    para.style.color='red';
    para.style.backgroundColor='yellow';
    para.style.border='4px dotted black';
}

function out(){

    para=document.getElementById("p1");
    para.style.color='';
    para.style.backgroundColor='';
    para.style.border='';

}