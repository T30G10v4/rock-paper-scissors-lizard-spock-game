const choose = ["rock","paper","scissors","lizard","spock"];

const playerChoice = prompt("Insert a choice from: rock, paper, scissors, lizard and spock");

isValue = choose.includes(playerChoice);

while(!isValue) {

    const playerChoice = prompt("WRONG CHOOSE: Insert a choice from: Rock, Paper, Scissors, Lizard and Spock");
    isValue = choose.includes(playerChoice);

}

const computerChoice = Math.floor(Math.random() * 5);

console.log("Player Choice", playerChoice);

console.log("Computer Choice:", choose[computerChoice]);

/*
x = TIE, 0 = COMPUTER, 1 = PLAYER
            rock    paper   scissors    lizard  spock
rock           x        1          0         1      0
paper          1        x          0         0      1
scissors       0        1          x         1      0
lizard         0        1          0         x      1    
spock          1        0          1         0      x        
*/

let result = "";

if(playerChoice === "rock") {

    if(choose[computerChoice] === "scissors" || choose[computerChoice] === "lizard") {

        result = "PLAYER WINS!";

    } else if (choose[computerChoice] === "paper" || choose[computerChoice] === "spock") {

        result = "COMPUTER WINS!";

    } else {

        result = "IT's a TIE!";

    }


} 

if(playerChoice === "paper") {

    if(choose[computerChoice] === "rock" || choose[computerChoice] === "spock") {

        result = "PLAYER WINS!";

    } else if (choose[computerChoice] === "scissors" || choose[computerChoice] === "lizard") {

        result = "COMPUTER WINS!";

    } else {

        result = "IT's a TIE!";

    }


} 

if(playerChoice === "scissors") {

    if(choose[computerChoice] === "paper" || choose[computerChoice] === "lizard") {

        result = "PLAYER WINS!";

    } else if (choose[computerChoice] === "rock" || choose[computerChoice] === "spock") {

        result = "COMPUTER WINS!";

    } else {

        result = "IT's a TIE!";

    }


} 

if(playerChoice === "lizard") {

    if(choose[computerChoice] === "paper" || choose[computerChoice] === "spock") {

        result = "PLAYER WINS!";

    } else if (choose[computerChoice] === "rock" || choose[computerChoice] === "scissors") {

        result = "COMPUTER WINS!";

    } else {

        result = "IT's a TIE!";

    }


} 

if(playerChoice === "spock") {

    if(choose[computerChoice] === "rock" || choose[computerChoice] === "scissors") {

        result = "PLAYER WINS!";

    } else if (choose[computerChoice] === "lizard" || choose[computerChoice] === "paper") {

        result = "COMPUTER WINS!";

    } else {

        result = "IT's a TIE!";

    }


} 



console.log(result);



