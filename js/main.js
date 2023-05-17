// Guardar nombre del jugador

const guardadoNombre = () => {

    let valor = document.getElementById("playerName").value;

    sessionStorage.setItem("name", valor);

    window.location.href = "../resultado.html";
}

// Coger el nombre, todavia no esta bien

// let resultado = document.getElementById("el id del ganador");

// resultado.innerHTML = `Hola ${sessionStorage.getItem("name")}`;

