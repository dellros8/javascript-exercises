let submitknapp = document.getElementById("knapp");

submitknapp.addEventListener("click", function(){
    let inputnoll = document.getElementById("inputnoll").value;
    let inputett = document.getElementById("inputett").value;
    let output = document.getElementById("largestnumber");
    let maxNumber = 0;

    if (inputnoll > inputett) {
        maxNumber = inputnoll;
    }
    else {
        maxNumber = inputett;
    }

    output.innerHTML = maxNumber.toString();

});