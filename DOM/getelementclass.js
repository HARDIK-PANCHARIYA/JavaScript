
function fun(){
    var e = document.getElementsByClassName("c1");
    // alert(e[0].innerHTML);
    // alert(e[1].innerHTML);
    // alert(e[2].innerHTML);

    for(var i=0; i<e.length; i++){
        alert(e[i].innerHTML);
    }
}


function fun1(){
    var p1=document.getElementById("p1");
    var p2cng = "JavaScript (JS) is a programming language that lets developers add dynamic features to web pages: nteractive content: JS allows developers to create interactive content like clickable buttons, pop-up menus, and animations. Dynamic updates: JS can update content on a web page in real time, without requiring the user to reload the page. Multimedia: JS can control multimedia, such as video jukeboxes and photo slideshows."
    p1.innerHTML=p2cng;
}

function out(){
    var p1=document.getElementById("p1");
    var p2cng = "JavaScript (JS) is a programming language ";
    p1.innerHTML=p2cng;
}

// function fun1(){
//     var e1=document.getElementById("p1")
//     e1.innerHTML= 'JavaScript (JS) is a programming language that lets developers add dynamic features to web pages: nteractive content: JS allows developers to create interactive content like clickable buttons, pop-up menus, and animations. Dynamic updates: JS can update content on a web page in real time, without requiring the user to reload the page. Multimedia: JS can control multimedia, such as video jukeboxes and photo slideshows. '
// }

// function out(){
//     var e1=document.getElementById("p1")
//     e1.innerHTML= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam reiciendis impedit sunt incidunt! Porro nisi eligendi vero ipsum! Qui, aut! Earum iste ea, dolore delectus facere doloribus tempore asperiores sint?' 
// }