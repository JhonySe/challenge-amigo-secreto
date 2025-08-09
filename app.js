// gracias a [] se guardaran los nombres]
let amigos = [];

function agregarAmigo(){
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
}
if (nombre==="") {
    alert("ingrese el nombre.");
    return;
}

amigos.push(nombre)
console.log("lista de amigos", amigos);

input.value = "";
mostrarLista()

function mostrarLista(){
    let lista = document.getElementById("listaAmigo");
    
}