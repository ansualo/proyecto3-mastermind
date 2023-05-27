// CREATE ROWS IN BOARD

const createRows = () => {

    let board = document.getElementById("game");

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


// DECIDE HOW MANY ROWS WE NEED IN THE BOARD DEPENDING ON THE LEVEL

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


// ADD IDS TO THE ROWS

let rows = document.getElementsByClassName("eachRow");
let arrayRows = Array.from(rows);

const addIdToRows = () => {
    for (let i = 0; i < arrayRows.length; i++) {
        let element = arrayRows[i];
        element.id = `eachRow${i}`;
    }
}

// ADD IDS TO THE SQUARES

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


// REMINDER OF THE CHOSEN LEVEL

const chosenLevel = () => {

    let level = document.getElementById("level");
    let p = document.createElement("p");

    if (selectedLevel == "beginnerRow") {
        p.innerHTML = "LEVEL :  beginner";
        level.appendChild(p);
    } else if (selectedLevel == "intermediateRow") {
        p.innerHTML = "LEVEL :  intermediate";
        level.appendChild(p);
    } else {
        p.innerHTML = "LEVEL :  advanced";
        level.appendChild(p);
    }
};

chosenLevel();

// REMINDER OF THE CHOSEN COLOURS 

const colourMiniSquares = () => {

    for (i = 0; i < arrayChosenColours.length; i++) {
        let miniSquare = document.getElementById(`${i}`);
        miniSquare.style.backgroundColor = arrayChosenColours[i];
    }
}

colourMiniSquares();


// CREATE THE RANDOM ANSWER

let randomAnswerArray = [];

const correctAnswer = () => {

    for (i = 0; i < 4; i++) {
        random = Math.floor(Math.random() * (arrayChosenColours.length));
        randomAnswerArray.push(arrayChosenColours[random]);
    }
}

correctAnswer();


// PAINT THE ANSWER IN THE SQUARES  --- THIS IS IN A COMMENT TO NOT SHOW THE ANSWER IN THE GAME

// const answerInSquares = () => {

//     let answer = document.getElementsByClassName("answer");
//     let arrayAnswer = Array.from(answer);

//     for (i = 0; i < 4; i++) {
//         arrayAnswer[i].style.backgroundColor = randomAnswerArray[i]
//     }
// }

// answerInSquares();




// PAINT THE SQUARES WITH OUR GUESS COLOURS 

let chosenColoursInRow = [];

// add the colour to the array (clicking the mini squares)
const addColour = (id) => {
    let colour = arrayChosenColours[id];
    chosenColoursInRow.push(colour);
    paintSquares();
}

// paint the squares using the index of the array

let j = 0;
let squareIwantToPaint;

const paintSquares = () => {

        for (let i = 0; i < 4; i++) {
            squareIwantToPaint = document.getElementById(`row${j}-square${i}`);
            let colourChosen = chosenColoursInRow[i];
            squareIwantToPaint.style.backgroundColor = colourChosen;
        }
}


// REMOVE CHOSEN COLOUS FROM THE ARRAY

const removeFromArray = () => {

    index = chosenColoursInRow.length - 1;
    chosenColoursInRow.pop();

    if(chosenColoursInRow.length <= 4){
        squareIwantToPaint = document.getElementById(`row${j}-square${index}`);
        squareIwantToPaint.style.backgroundColor = "";
    }

};


// COMPARE THE CHOSEN COLOURS WITH THE CORRECT ANSWER
// compare arrays and push into a new array if the circle needs to be purple or white

let arrayCircles = [];

const compareColours = () => {
    if (chosenColoursInRow.length >= 4){

        arrayCircles = chosenColoursInRow.map((element, index) => {

            if (element === randomAnswerArray[index]) {
                return "rgb(138, 43, 226)";
            } else if (randomAnswerArray.includes(element)){
                return "rgb(255, 255, 255)";
            } else {
                return "";
            }
        })

        paintCircles();
        check();

    } 
}

// PAINT THE CIRCLES

const paintCircles = () => {
    for (let i = 0; i < 4; i++) {
        let circleIwantToPaint = document.getElementById(`row${j}-circle${i}`);
        let paintAnswer = arrayCircles[i];
        circleIwantToPaint.style.backgroundColor = paintAnswer;
    }
}

// CHANGE ROWS AND EMPTY THE ARRAY OF COLOURS

const check = (showWinnerPage) => {

    if (j < (howMany - 1)) {
        j++;
        chosenColoursInRow.length = "";
    } else {
        sessionStorage.setItem("result", "loser");
        window.location.href = "./result.html";
    }
}


// CHECK IF I HAVE WON

const winner = (showWinnerPage) => {

   let stringArrayCircles = arrayCircles.toString();
   let correctAnswer = "rgb(138, 43, 226),rgb(138, 43, 226),rgb(138, 43, 226),rgb(138, 43, 226)";

    if(stringArrayCircles === correctAnswer){

        sessionStorage.setItem("result", "winner");
        window.location.href = "./result.html";
    }
}


