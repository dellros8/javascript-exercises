let changeColor = document.getElementById("knapp1");
let paragraph = document.getElementById("p");

changeColor.addEventListener("click", function(){

    paragraph.setAttribute("style","font-size: 2em")

});

let knapp2 = document.getElementById("knapp2");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");

knapp2.addEventListener("click", function(){

    console.log(fname.value, lname.value);

});

let knapp3 = document.getElementById("knapp3");
let id = document.getElementById("anchortag");
console.log(id)
let hreflang = id.getAttribute("hreflang");
let target = id.getAttribute("target");
let href = id.getAttribute("href");

knapp3.addEventListener("click", function(){


    console.log(id.id);

    console.log(hreflang);

    console.log(target);

    console.log(href);
});

