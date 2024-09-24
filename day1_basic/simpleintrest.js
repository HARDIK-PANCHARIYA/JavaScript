
// WAP to print simple intrest ---- si=p*n*r/100

var pamt = parseInt(prompt("Enter Principle amount"))
var time = parseInt(prompt("Enter number of Year "))
var rate = parseFloat(prompt("Enter rate of Intrest"))

var si = pamt*time*rate/100

document.write("Simple Intrest = "+"<br>"+si.toFixed(2))