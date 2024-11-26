import { createLoadButton } from "./components/loadButton/loadButton";
import { createSpinner } from "./components/spinner/spinner";



const handleClick = () => {
    alert("Botón pulsado");
};







document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const spinner = createSpinner();
    app.appendChild(spinner);
})

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const loadBtn = createLoadButton();
    app.appendChild(loadBtn)

    loadBtn.addEventListener("click", handleClick)
})
