// CREATE BOARD

let board = document.getElementById("game");

const createRows = () => {

    let mainCol = document.createElement("div");
    mainCol.className = "col-12 d-flex";

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


const howManyRows = () => {

    if (selectedLevel == "beginnerRow") {
        for (let i = 0; i < 10; i++) {
            createRows();
        }
    } else if (selectedLevel == "intermediateRow") {
        for (let i = 0; i < 8; i++) {
            createRows();
        }
    } else {
        for (let i = 0; i < 6; i++) {
            createRows();
        }
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

console.log(randomAnswerArray);


// ANSWER IN THE SQUARES

const answerInSquares = () => {

    let answer = document.getElementsByClassName("answer");
    let arrayAnswer = Array.from(answer);

    for (i = 0; i < 4; i++) {
        arrayAnswer[i].style.backgroundColor = randomAnswerArray[i]
    }
}

answerInSquares();


// ADD IDS TO THE SQUARES

const addIdToSquares = () => {

    let squares = document.getElementsByClassName("squareGame");
    let arraySquares = Array.from(squares);

    for (let i = 0; i < arraySquares.length; i++) {
        let element = arraySquares[i];
        element.id = `squareGame${i}`;
    }
}

// ADD IDS TO THE CIRCLES

const addIdToCircles = () => {

    let circles = document.getElementsByClassName("circle");
    let arrayCircles = Array.from(circles);

    for (let i = 0; i < arrayCircles.length; i++) {
        let element = arrayCircles[i];
        element.id = `circle${i}`;
    }
}

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
const paintSquares = () => {

    for (let i = 0; i < 4; i++) {

        let squareIwantToPaint = document.getElementById(`squareGame${i}`);
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


// paint the circles 

const paintCircles = () => {

    for (let i = 0; i < 4; i++) {
        let circleIwantToPaint = document.getElementById(`circle${i}`);
        let paintAnswer = arrayCircles[i];
        circleIwantToPaint.style.backgroundColor = paintAnswer;
    }
};

