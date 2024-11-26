// //selección de elementos del DOM

import { Usuario, Usuario } from "./components/Usuario";

// const appDiv = document.getElementById("app");

// appDiv.innerText = "Hola mundo";
// appDiv.innerHTML = "<h1>Hola Mundo</h1>";

// appDiv.classList.add("clase1", "clase2");


// const items = document.getElementsByClassName("items");

// let n = 0;
// for (const i of items) {
//     i.innerText = `Hola amigo ${++n}`
// }

// const saludoP = document.querySelector(".saludo");

// const saludos = document.querySelector(".saludo");






// -----------------------------------------
console.log("Hola mundo");

//implementar un perfil de login y actualización del perfil usando programación orientada a objetos 
//el objetivo será crear una clase u objeto para modelar el inicio de sesión/perfil

//creo una instancia de Usuario

const usuario = new Usuario("Luna", "luna@gmail.com", "asd")

const app = document.getElementById("app")
app.innerHTML = `
    <h2>Gestión de Usuarios</h2>
    <p>${usuario.getInfo}</p>
    <button id="btn-login"> Iniciar Sesión </button>
    <button id="btn-actualizar-email"> Actualizar Email </button>
    <div id="form-container"></div>

`;

document.getElementById("btn-login")
    .addEventListener("click", mostrarFormularioLogin)

document.querySelector("#btn-actualizar-email")
    .addEventListener("click", mostrarFormularioUpdateEmail)

function mostrarFormularioLogin(){
    const formContainer = document.getElementById("form-container");
    formContainer.innerHTML `
        <input id="email-login" type="email" placeholder="Introduzca el email" />
        <input id="password-login" type="password" placeholder="Introduzca la contraseña" />
        <button id="btn-enviar-login"> Enviar </button>

    `;
}

function mostrarFormularioUpdateEmail(){
    const formContainer = document.getElementById("form-container");
    formContainer.innerHTML `
        <input id="new-email" type="email" placeholder="Introduzca el nuevo email" />
        <button id="btn-enviar-emailUpdate"> Enviar </button>

    `;
}

document.getElementById("btn-enviar-login")
    .addEventListener("click", () => {
        const email = document.getElementById("email-login").value.trim(); //trim() quita espacios para eliminar espacios extras a ambos lados
        const password = document.getElementById("password-login").value.trim();
        alert(usuario.login(email, password));
    }
);

document.getElementById("btn-enviar-emailUpdate")
    .addEventListener("click", () => {
        const newEmail = document.getElementById("new-email").value.trim();
        alert(usuario.actualizarEmail(newEmail));
    }
);



//gestion de productos
//implementar una funcion costructora que modele un producto, de este quiero saber nombre, precio, stock y una imagen(url)
//los métodos que quiero son getInfo(), y updateStock(cantidad que cambia)
//genera un array de produtos, renderízalos en el DOM, añade un botón a cada producto que permita actualizar el stock
//aplicar dos de las tres formas posibles de crear objetos, uno ha de ser orientado a objetos



//sistema bancario
//objetivo: implementar una clase llamada CuentaBancaria que tenga una propiedad privada llamada "saldo" y que me permita depositar y retirar x cantidad
//genera en el DOM dos contenedores, uno para ingresar o retirar dinero y otro para mostrar información del saldo que tengo disponible
//el ingresar o retirar se hará con un radio button

