// GUARDAR NOMBRE JUGADOR

const guardadoNombre = () => {

    let valor = document.getElementById("playerName").value;

    sessionStorage.setItem("name", valor);

    window.location.href = "../resultado.html";
}

// Coger el nombre, todavia no esta bien

// let resultado = document.getElementById("el id del ganador");

// resultado.innerHTML = `Hola ${sessionStorage.getItem("name")}`;



// COLOR PICKER

// window.addEventListener("load", startup, false);

function startup() {
    let colorPicker = document.querySelector("#colorPicker");
    colorPicker.value = "#8a2be2";
    colorPicker.addEventListener("input", updateFirst, false);
    colorPicker.addEventListener("change", updateAll, false);
    colorPicker.select();
}

function updateFirst(event) {
    const colorSquare = document.getElementById("square1");
    colorSquare.style.backgroundColor = event.target.value;
}

function updateAll(event) {
    const colorSquare = document.getElementById("square1");
    colorSquare.style.backgroundColor = event.target.value;
}
