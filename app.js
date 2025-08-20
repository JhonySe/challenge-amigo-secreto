// gracias a [] se guardarán los nombres
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar entrada
    if (nombre === "") {
        alert("Ingrese el nombre.");
        return;
    }

    // Agregar al array
    amigos.push(nombre);
    console.log("Lista de amigos:", amigos);

    // Limpiar campo
    input.value = "";

    // Mostrar lista
    mostrarLista();
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");

    // Limpiar lista antes de actualizar
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
