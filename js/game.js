// CREATE BOARD

let board = document.getElementById("game");

const createRows = () => {

    let mainCol = document.createElement("div");
    mainCol.className = "col-12 d-flex eachRow";
  
    let squaresDiv = document.createElement("div");
    squaresDiv.className = "d-flex justify-content-evenly";

    for (let i = 0; i < 4; i++) {
        let eachSquare = document.createElement("div");
        eachSquare.className = "squareGame";
        squaresDiv.appendChild(eachSquare)
    }

    let circlesDiv = document.createElement("div");
    circlesDiv.className = "d-flex justify-content-evenly align-items-center";

    for (let i = 0; i < 4; i++) {
        let eachCircle = document.createElement("div");
        eachCircle.className = "circle m-1";
        circlesDiv.appendChild(eachCircle)
    }

    mainCol.appendChild(squaresDiv);
    mainCol.appendChild(circlesDiv);
    board.appendChild(mainCol);
};

let howMany = 0;

const howManyRows = () => {


    if (selectedLevel == "beginnerRow") {
        for (let i = 0; i < 10; i++) {
            createRows();
        }
        return howMany = 10;
    } else if (selectedLevel == "intermediateRow") {
        for (let i = 0; i < 8; i++) {
            createRows();
        }
        return howMany = 8;
    } else {
        for (let i = 0; i < 6; i++) {
            createRows();
        }
        return howMany = 6;
    }
}

howManyRows();



// LEVEL

const chosenLevel = () => {

    let level = document.getElementById("level");
    let p = document.createElement("p");

    if (selectedLevel == "beginnerRow") {
        p.innerHTML = "LEVEL: beginner";
        level.appendChild(p);
    } else if (selectedLevel == "intermediateRow") {
        p.innerHTML = "LEVEL: intermediate";
        level.appendChild(p);
    } else {
        p.innerHTML = "LEVEL: advanced";
        level.appendChild(p);
    }
};

chosenLevel();

// CHOSEN COLOURS 

const colourMiniSquares = () => {

    for (i = 0; i < arrayChosenColours.length; i++) {
        let miniSquare = document.getElementById(`${i}`);
        miniSquare.style.backgroundColor = arrayChosenColours[i];
    }

}

colourMiniSquares();

// RANDOM ANSWER

let randomAnswerArray = [];

const correctAnswer = () => {

    for (i = 0; i < 4; i++) {

        random = Math.floor(Math.random() * (arrayChosenColours.length));
        randomAnswerArray.push(arrayChosenColours[random]);
    }
}

correctAnswer();


// ANSWER IN THE SQUARES

const answerInSquares = () => {

    let answer = document.getElementsByClassName("answer");
    let arrayAnswer = Array.from(answer);

    for (i = 0; i < 4; i++) {
        arrayAnswer[i].style.backgroundColor = randomAnswerArray[i]
    }
}

answerInSquares();


// ADD IDS TO THE ROWS

let rows = document.getElementsByClassName("eachRow");
let arrayRows = Array.from(rows);

const addIdToRows = () => {

    for (let i = 0; i < arrayRows.length; i++) {
        let element = arrayRows[i];
        element.id = `eachRow${i}`;
    }
}


const addIdToSquares = () => {

    let squares = document.getElementsByClassName("squareGame");
    let arraySquares = Array.from(squares);


    for (let j = 0; j < howMany; j++){

        for (let i = 0; i < 4; i++) {

            let index = j * 4 + i;
            let element = arraySquares[index];
            element.id = `row${j}-square${i}`;
        }
    };
    
}

// ADD IDS TO THE CIRCLES

const addIdToCircles = () => {

    let circles = document.getElementsByClassName("circle");
    let arrayCircles = Array.from(circles);


    for (let j = 0; j < howMany; j++){

        for (let i = 0; i < 4; i++) {

            let index = j * 4 + i;
            let element = arrayCircles[index];
            element.id = `row${j}-circle${i}`;
        }
    };

}


addIdToRows();
addIdToSquares();
addIdToCircles();



let chosenColoursInRow = [];

// Add colours to the new array
const addColour = (id) => {
    let whichColour = document.getElementById(id);
    let colour = arrayChosenColours[id];
    chosenColoursInRow.push(colour);
}


console.log(chosenColoursInRow);




// paint the squares 

let j = 0;

const check = () => {

    j++;
    chosenColoursInRow.length = "";

    console.log(chosenColoursInRow);
    console.log(j);
}



const paintSquares = () => {

        for (let i = 0; i < 4; i++) {

            let squareIwantToPaint = document.getElementById(`row${j}-square${i}`);
            let colourChosen = chosenColoursInRow[i];
            squareIwantToPaint.style.backgroundColor = colourChosen;
            
        }
    
};



// REMOVE NO FUNCIONA
// const removeFromArray = () => {
//    chosenColoursInRow.pop();
//    console.log(chosenColoursInRow);
// };



// COMPARE chosenColoursInRow with randomAnswerArray


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! LIMITAR EL NUMERO DE CLICKS 

let arrayCircles = [];

const compareColours = () => {

   arrayCircles = chosenColoursInRow.map((element, index) => {

        if (element === randomAnswerArray[index]) {
            return "rgb(255, 0, 0)";
        } else if (randomAnswerArray.includes(element)){
            return "rgb(255, 255, 255)";
        } else {
            return "";
        }
    })
    console.log(arrayCircles);
};


// PAINT THE CIRCLES

const paintCircles = () => {

    for (let i = 0; i < 4; i++) {
        let circleIwantToPaint = document.getElementById(`row${j}-circle${i}`);
        let paintAnswer = arrayCircles[i];
        circleIwantToPaint.style.backgroundColor = paintAnswer;
    }
};


const winner = () => {

   let stringArrayCircles = arrayCircles.toString();

   let correctAnswer = "rgb(255, 0, 0),rgb(255, 0, 0),rgb(255, 0, 0),rgb(255, 0, 0)";

   console.log(stringArrayCircles)

    if(stringArrayCircles === correctAnswer){

        alert("congratulations");

    };

}
