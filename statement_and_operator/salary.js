// WAP to accept basic salary from user and print net salary of employee but follow below condition
// a. if bs>=10000 then hra 10% of bs, ta = 9%, bonus 20000
// b. otherwise then hra=6000, ta=3000, bonus=10000
// c. netsal = bs + hra + ta + bonus

var bs = parseInt(prompt("Enter Basic salary = "));

if(bs>=10000){
    var hra=bs*1.10;
    var ta=bs*0.9;
    var bos=20000;
    var netsal=hra+ta+bos+bs;
    document.write("Your net salary = "+netsal);
}
else{
    var hra=6000;
    var ta=3000;
    var bos=10000;
    var netsal=hra+ta+bos+bs;
    document.write("Your net salary = "+netsal);
}

