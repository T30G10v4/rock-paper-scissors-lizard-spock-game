const choose = ["ROCK","PAPER","SCISSORS","LIZARD","SPOCK"];

const gameMatrix = [
    ["TIE",true,false,true,false],
    [true,"TIE",false,false,true],
    [false,true,"TIE",true,false],
    [false,true,false,"TIE",true],
    [true,false,true,false,"TIE"]
]

let playerChoice = prompt("Insert a choice from: 0 = rock, 1 = paper, 2 = scissors, 3 = lizard and 4 = spock");

while(playerChoice < 0 || playerChoice > 4) {

    playerChoice = prompt("Insert a choice from: 0 = rock, 1 = paper, 2 = scissors, 3 = lizard and 4 = spock");

}

const computerChoice = Math.floor(Math.random() * 5);

console.log("Player's choice = ", choose[playerChoice]);
console.log("Player's choice = ", choose[computerChoice]);

game = gameMatrix[playerChoice][computerChoice];

let winner = "Player WINS!!! :D";

if(game === "TIE")
{
    winner = "It's a TIE!!!";


} else if (!game) {

    winner = "Computer wins... D:";

}

console.log(winner);

/*
x = TIE, 0 = COMPUTER, 1 = PLAYER
            rock    paper   scissors    lizard  spock
rock           x        1          0         1      0
paper          1        x          0         0      1
scissors       0        1          x         1      0
lizard         0        1          0         x      1    
spock          1        0          1         0      x        
*/



