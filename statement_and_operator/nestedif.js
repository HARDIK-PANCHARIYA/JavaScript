

var color = prompt("Enter any character = ")

if(color=='r' || color=='R' ){
    document.write("<h3 style='color:red'>color is red</h3>")
}
else if(color=='b' || color=='B'){
    document.write("<h3 style='color:blue'>color is blue</h3>")
}
else if(color=='w' || color=='W'){
    document.write("<h3 style='background-color: black ; color:white '>color is white</h3>")
}
else if(color=='p' || color=='P'){
    document.write("<h3 style='color:pink'>color is pink</h3>")
}
else{
    document.write("<h3 style='color:black'>wrong color</h3>")
}
