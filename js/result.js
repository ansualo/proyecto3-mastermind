
// WRITE THE NAME OF THE PLAYER
const winnerName = () => {
    let nameWinner = document.getElementById("nameWinner")
    nameWinner.innerHTML = `${sessionStorage.getItem("name").toUpperCase()} YOU ARE ON YOUR WAY TO BECOMING A MASTERMIND MASTER`;

    let nameLoser = document.getElementById("nameLoser")
    nameLoser.innerHTML = `${sessionStorage.getItem("name").toUpperCase()} YOU CAN DO IT! PLEASE TRY AGAIN`;
};


// SHOW THE WINNER MESSAGE
const showWinnerPage = () => {

    let result = sessionStorage.getItem("result");
    let resultPage = document.getElementById(result);
    resultPage.style.display = "flex";

}


winnerName();
showWinnerPage();


