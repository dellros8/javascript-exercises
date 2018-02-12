let changeColor = document.getElementById("knapp1");
let paragraph = document.getElementById("p");

changeColor.addEventListener("click", function(){

    paragraph.setAttribute("style","font-size: 2em; color: green;")

});

let knapp2 = document.getElementById("knapp2");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");

knapp2.addEventListener("click", function(){

    console.log("Name: ", fname.value, lname.value);

});

let knapp3 = document.getElementById("knapp3");
let link = document.getElementById("anchortag");

let id = link.getAttribute("id");
let hreflang = link.getAttribute("hreflang");
let target = link.getAttribute("target");
let href = link.getAttribute("href");

knapp3.addEventListener("click", function(){

    console.log(id, hreflang, target, href);

});

let addRow = document.getElementById("knapp4");
let delRow = document.getElementById("knapp5");
let existingTable = document.getElementById("table");


addRow.addEventListener("click", function(){
    let row = existingTable.insertRow(0);
    let rowcellett = row.insertCell(0);
    let rowcelltva = row.insertCell(1);
    let rowcelltre = row.insertCell(2);

    rowcellett.innerHTML = "123";
    rowcelltva.innerHTML = "124";
    rowcelltre.innerHTML = "125";
});

delRow.addEventListener("click", function(){
    existingTable.deleteRow(0);
});

window.onresize = resizewindow;

function resizewindow() {

console.log("height: ", window.innerHeight, "width: ", window.innerWidth);

}

let inputField = document.getElementById("field");
let valueOfInput = inputField.getAttribute("value");


    inputField.addEventListener("keyup", function(){
        console.clear();
        console.log("value av input: ", valueOfInput);
        console.log("vad du skrivit: ", inputField.value);

});
