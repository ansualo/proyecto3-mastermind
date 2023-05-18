// GUARDAR NOMBRE JUGADOR

const guardadoNombre = () => {

    let valor = document.getElementById("playerName").value;
    sessionStorage.setItem("name", valor);
}

// Coger el nombre, todavia no esta bien

// let resultado = document.getElementById("el id del ganador");

// resultado.innerHTML = `Hola ${sessionStorage.getItem("name")}`;



// COLOR PICKER no funciona

window.addEventListener("load", startup, false);

let colorPicker = document.getElementsByClassName("colorpicker");
let arrayColorPicker = Array.from(colorPicker);

function startup(event) {
    arrayColorPicker.map(
        elemento => {
            colorPicker.value = "#8a2be2";
            colorPicker.addEventListener("input", updateFirst, false);
            colorPicker.addEventListener("change", updateAll, false);
            colorPicker.select();
        }
    )
}

function updateFirst(event) {
    const colorSquare = document.getElementById("square1");
    colorSquare.style.backgroundColor = event.target.value;
}

function updateAll(event) {
    const colorSquare = document.getElementById("square1");
    colorSquare.style.backgroundColor = event.target.value;
}



// HIDDEN ROWS 

// save level
const saveLevelBeginner = () => {
    sessionStorage.setItem("level", "beginnerRow");
    window.location.href = "./colores.html";
}
const saveLevelIntermediate = () => {
    sessionStorage.setItem("level", "intermediateRow");
    window.location.href = "./colores.html";
}
const saveLevelAdvanced = () => {
    sessionStorage.setItem("level", "advancedRow");
    window.location.href = "./colores.html";
}
// show the row shows the correct row depending on the level

// document.getElementById("beginnerRow").style.display= "none";
// document.getElementById("intermediateRow").style.display= "none";

window.onload = (event) => {
    let selectedLevel = sessionStorage.getItem("level");
    let selected = document.getElementById(selectedLevel);
    selected.style.display = "flex";
};









