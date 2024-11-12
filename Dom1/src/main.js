//selección de elementos del DOM

const appDiv = document.getElementById("app");

appDiv.innerText = "Hola mundo";
appDiv.innerHTML = "<h1>Hola Mundo</h1>";

appDiv.classList.add("clase1", "clase2");


const items = document.getElementsByClassName("items");

let n = 0;
for (const i of items) {
    i.innerText = `Hola amigo ${++n}`
}

const saludoP = document.querySelector(".saludo");

const saludos = document.querySelector(".saludo");
