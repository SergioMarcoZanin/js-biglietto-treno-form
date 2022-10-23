"use strict"
// 1. Chiedere all'utente nome e cognome
const name=document.getElementById("name").value;
console.log(name);
document.getElementById("name-passenger").innerHTML=name;
// 2. Chiedere all'utente i km da percorerre
const km=Number(document.getElementById("km").value);
console.log(km);
// 3. Età del passeggero
const age=document.getElementById("age").value;
console.log(age);
// 4. Calcolare il prezzo del biglietto
let price= km * 0.21
if (age==="underage"){
    price-=price*0.2;
    console.log(price+(" minorenne"));
document.getElementById("offert").innerHTML="Biglietto Minorenni";
}else if (age==="overage"){
    price-=price*0.4;
    console.log(price+(" over 65"));
    document.getElementById("offert").innerHTML="Biglietto Over 65";
}else{
    console.log(price+" adulto");
    document.getElementById("offert").innerHTML="Biglietto Standard";
}
document.getElementById("price-ticket").innerHTML=price
// 5. Carrozza e codice CP
let wagon= Math.floor(Math.random() * 10+1);
document.getElementById("wagon").innerHTML=wagon
console.log(wagon);
let cpCode= Math.floor(Math.random() * 10000+90000);
document.getElementById("cp-ticket").innerHTML=cpCode
console.log(cpCode);
// 6. Mostrare Biglietto
const btnGenerator= document.getElementById("btn-generator");
btnGenerator.addEventListener("click", function(){ 
    document.getElementById("ticket").classList.remove("d-none") ; 
});
