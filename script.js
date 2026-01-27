let a = 0;



function cambia() {

    if (a== 0) {
 document.getElementById("rosso").style.background = "green";
 a = 1;
    }
    else if (a == 1) {
         document.getElementById("rosso").style.background = "red";
 a = 0;
    }
}

function somma() {
    let a = parseFloat(document.getElementById("n1").value);
    let b = parseFloat(document.getElementById("n2").value);
    let c = a + b;
    console.log(c);
    document.getElementById("risultato").innerText = c;
}   
function differenza() {
    let a = parseFloat(document.getElementById("n1").value);
    let b = parseFloat(document.getElementById("n2").value);
    let c = a - b;
    console.log(c);
    document.getElementById("risultato").innerText = c;
}   
function prodotto() {
    let a = parseFloat(document.getElementById("n1").value);
    let b = parseFloat(document.getElementById("n2").value);
    let c = a * b;
    console.log(c);
    document.getElementById("risultato").innerText = c;
}   

function divisione() {
    let a = parseFloat(document.getElementById(n1).value);
    let b = parseFloat(document.getElementById(n2).value);
    let c = a / b;
    console.log(c);
    document.getElementById("risultato").innerText = c;
    if ( c = 0 ) {
    document.getElementById("risultato").style.background = "Impossibile";
 
    }
}   