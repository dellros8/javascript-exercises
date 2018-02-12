let div = document.createElement("div");
let header = document.createElement("h1");
let paragraph = document.createElement("p");


let image = document.createElement("img");

let textinp = document.createTextNode("My paragraph text");
let textinh1 = document.createTextNode("My header text");

paragraph.appendChild(textinp);
header.appendChild(textinh1);

let existingElement = document.getElementsByTagName("body")[0];
existingElement.appendChild(div);

existingElement = document.getElementsByTagName("div")[0];
existingElement.appendChild(header);

existingElement = document.getElementsByTagName("div")[0];
existingElement.appendChild(paragraph);

existingElement = document.getElementsByTagName("body")[0];
existingElement.appendChild(image);

image.setAttribute("src", "../images/elefant.jpeg")