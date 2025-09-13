let amigos = []

function agregarAmigo() {
    let input = document.getElementById ("amigo")
    let nombre = input.value.trim();


if (nombre === "") {
    alert ("¿y el nombre del sobreviviente?");
    return
}

amigos.push(nombre)

input.value = ""
}