// Rock paper  scissor game

// user confirmation
let playGame = confirm('shall we play rock paper and scissors game?');
if (playGame) {
    let playerChoice = prompt('please enter your choice like rock, paper or scissor');
    if (playerChoice) {
        let player = playerChoice.trim().toLowerCase();
        if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissor') {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? 'rock' :
                computerChoice === 2 ? 'paper' : 'scissor';

            let result = player === computer ? 'tie game' :
                player === 'rock' && computer === 'paper' ? `player's choice = ${player} and computer's choice = ${computer}\n player wins!` :
                    player === 'paper' && computer === 'rock' ? `player's choice = ${player} and computer's choice = ${computer}\n computer wins!` :
                        player === 'rock' && computer === 'scissor' ? `player's choice = ${player} and computer's choice = ${computer}\n player wins!` :
                            player === 'scissor' && computer === 'rock' ? `player's choice = ${player} and computer's choice = ${computer}\n computer wins!` :
                                player === 'scissor' && computer === 'paper' ? `player's choice = ${player} and computer's choice = ${computer}\n player wins!` :
                                    'computer wins!';
            alert(result);
            let playAgain = confirm("play again?");
            playAgain ? location.reload() :
                alert("thanks for playing");
        }
        else {
            alert("you did't answer the right choice");
        }
    }
    else {
        alert('you inputted the wrong choice')
    }
}
else {
    alert("may be next time");
}
