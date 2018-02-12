let enterNamePrompt = (prompt("Enter your full name: "));


let nameArray = enterNamePrompt.split(' ');
let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");

firstName.innerHTML=(nameArray[0].toLowerCase());
lastName.innerHTML=(nameArray[1].toUpperCase());