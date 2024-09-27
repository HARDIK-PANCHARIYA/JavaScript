// WAP to print studnet marksheet
// inpit = strname,strollno,s1,s2,s3,
// total,percentage,grade
// >=70 - distinction
// 60-70 - first class
// 50-60 - second class
// 40-50 - pass class
// otherwise - fail

var rno = prompt("Enter Roll no = ");
var sname = prompt("Enter student name = ");
var s1 = parseInt(prompt("Enter student subject1 marks = "));
var s2 = parseInt(prompt("Enter student subject2 marks = "));
var s3 = parseInt(prompt("Enter student subject3 marks = "));
var total = s1+s2+s3;
var per=total/3;
var grade;

if(per>=70){
    grade="Distinction"
}
else if(per>=60 && per<70){
    grade="First class"
}
else if(per>=50 && per<60){
    grade="Second class"
}
else if(per>=40 && per<40){
    grade="Pass class"
}else{
    grade="Fail"
}

document.write(`<table border=3 align='center' cellpadding=10><tr> <th>Roll No</th> <th>Name</th> <th>Marks 1</th> <th>Marks 2</th> <th>Marks 3</th> <th>Total</th> <th>Percentage</th>
    <th>Grade</th> </tr>`);

document.write(`<tr> <td>${rno}</td> <td>${sname}</td> <td>${s1}</td> <td>${s2}</td> <td>${s3}</td> <td>${total}</td> <td>${per.toFixed(2)}</td> 
    <td>${grade}</td> </tr> </table>`)