const choose = ["ROCK","PAPER","SCISSORS","LIZARD","SPOCK"];

let playerChoice;

const playerChoiceDOM = document.getElementsByClassName("choice");


for(let i = 0; i<5 ; i++) {

    playerChoiceDOM[i].addEventListener("click", function() {

        playerChoice = i;

    });

}

const playerSay = document.getElementById("player-say");
console.log(playerSay);
playerSay.innerHTML += choose[playerChoice];
console.log(choose[playerChoice]);

// do {

//     playerChoice = prompt("Insert a choice from: 0 = rock, 1 = paper, 2 = scissors, 3 = lizard and 4 = spock");

// } while (playerChoice < 0 || playerChoice > 4)



/*
NULL = TIE, 1 = PLAYER, 0 = COMPUTER
            rock    paper   scissors    lizard  spock
rock        NULL        0          1         1      0
paper          1     NULL          0         0      1
scissors       0        1       NULL         1      0
lizard         0        1          0      NULL      1    
spock          1        0          1         0   NULL        
*/

const gameMatrix = [
    [null,false,true,true,false],
    [true,null,false,false,true],
    [false,true,null,true,false],
    [false,true,false,null,true],
    [true,false,true,false,null]
];


const goDOM = document.getElementById("go");

goDOM.addEventListener("click", function() {

    const computerChoice = Math.floor(Math.random() * 5);

    const game = gameMatrix[playerChoice][computerChoice];

    let winner = "Player WINS!!! :D";

    if (game === null)
    {
        winner = "It's a TIE!!!";


    } else if (!game) {

        winner = "Computer wins... D:";

    }

    console.log("Player's choice = ", choose[playerChoice]);
    console.log("Computer's choice = ", choose[computerChoice]);
    console.log(winner);

});