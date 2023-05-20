// GUARDAR NOMBRE JUGADOR

const guardadoNombre = () => {

    let valor = document.getElementById("playerName").value;
    sessionStorage.setItem("name", valor);
}

// Coger el nombre, todavia no esta bien
// let resultado = document.getElementById("el id del ganador");
// resultado.innerHTML = `Hola ${sessionStorage.getItem("name")}`;


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

// shows the correct row depending on the level
window.onload = (event) => {
    let selectedLevel = sessionStorage.getItem("level");
    let selected = document.getElementById(selectedLevel);
    selected.style.display = "flex";
};



// COLOR PICKER

window.addEventListener("load", startup, false);

let colorPicker = document.getElementsByClassName("colorpicker");
let arrayColorPicker = Array.from(colorPicker);
let arrayChosenColours = [];

function startup(event) {
    arrayColorPicker.map(
        (element) => {
            element.value = "#8a2be2";
            element.addEventListener("input", (event)=> updateFirst(event, element), false);
            element.select();
        }
    )
}

const updateFirst = (event,element) => {
    let colorSquare = document.getElementById(`square${element.id}`);
    colorSquare.style.backgroundColor = event.target.value;
    let color = getComputedStyle(colorSquare).backgroundColor;
    arrayChosenColours[element.id] = color;
}

console.log(arrayChosenColours);

const saveChosenColours = () => {
    sessionStorage.setItem("chosenColours", JSON.stringify(arrayChosenColours));
    window.location.href = "./juego.html";
}


