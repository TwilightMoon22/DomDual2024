/**
 * Spinner con tres estados:
 * 
 * - Crear el Spinner
 * - Mostrar el Spinner
 * - Ocultar el Spinner
 */


export const createSpinner = () => {
    //voy a crear el spinner en el DOM
    const spinner = document.createElement("div");
    spinner.id="spinner";
    spinner.classList.add("hidden", "spinner");
    spinner.textContent = "Cargando ...";
    return spinner;
};


export function hiddenSpinner() {
    //ocultar el spinner
    const spinner = document.getElementById("spinner");
    spinner.classList.add("hidden");
}


export function showSpinner() {
    //mostrar el spinner
    const spinner = document.getElementById("spinner");
    spinner.classList.remove("hidden");
}