import { createLoadButton } from "./components/loadButton/loadButton";
import { createSpinner } from "./components/spinner/spinner";


document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const spinner = createSpinner();
    app.appendChild(spinner);
})

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const loadButton = createLoadButton();
    app.appendChild(loadButton)
})