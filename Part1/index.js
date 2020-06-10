let gameArray = [];
let turns = 0;
let gameOver = false;


let play = (id) => {
   
    const playerSpan = document.getElementById('player');
    const box = document.getElementById(id);
    const turn = playerSpan.innerText;
    if (box.innerText === "" && !gameOver) {
        turns += 1;
        gameArray[id] = turn;
        box.innerHTML = turn;
        playerSpan.innerText = turn === "X" ? "O" : "X"; 
        if (checkWinner(turn)) {
            document.getElementById("title").innerText = turn + " Wins!"
            gameOver = true;
        } else if (turns === 9) {
            changeRed();
            document.getElementById("title").innerText = "CAT'S GAME!";
        }
    }
};

document.getElementById('reset').addEventListener('click', function() {
    turns = 0;
    gameOver = false;
    gameArray = [];
    for (var i = 0; i <= 8; i++) {
        box = document.getElementById(i);
        box.style.background = "transparent";
        box.innerText = "";
        document.getElementById('player').innerText = "X";
        document.getElementById("title").innerText = "Tic Tac Toe Board!";
    }
});


let checkWinner = (player) => {
    let winner = false;
    for (var i = 0; i < 9; i+=3) {
        if (gameArray[i] === player) {
            if (gameArray[i] === gameArray[i+1] && gameArray[i] == gameArray[i+2]) {
                changeGreen(i, i+1, i+2)
                winner = true;
            }
        }
    }
    for (var i = 0; i < 3; i++) {
        if (gameArray[i] == player) {
            if (gameArray[i] === gameArray[i + 3] && gameArray[i] == gameArray[i+6]) {
                changeGreen(i, i+3, i+6)
                winner = true;
            }
        }
    }
    if (gameArray[4] === player) {
        if (gameArray[0] === gameArray[4] && gameArray[4] === gameArray[8]) {
            changeGreen(0, 4, 8)
            winner = true;
        } if (gameArray[2] === gameArray[4] && gameArray[4] === gameArray[6]) {
            changeGreen(2, 4, 6)
            winner = true;
        }
    }
    return winner;
}

let changeGreen = (id1, id2, id3) => {
    const box1 = document.getElementById(id1);
    const box2 = document.getElementById(id2);
    const box3 = document.getElementById(id3);
    box1.style.background = "lightgreen";
    box2.style.background = "lightgreen";
    box3.style.background = "lightgreen";
}
let changeRed = () => {
    for (var i = 0; i < 9; i++) {
        const box = document.getElementById(i);
        box.style.background = "red";
    }
}