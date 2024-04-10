let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const scissor_div = document.getElementById("s");
const paper_div = document.getElementById("p");

function win(user,computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const compUserWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${compUserWord}. You win! "`
}

function convertToWord(letter) {
    if (letter === 's') return "Rock";
    if (letter === 'p') return "Paper";
    return 'Scissor'
}

function loose(user,computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const compUserWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${compUserWord}. You win! "`
}

function draw(user,computer) {
    computerScore++;
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const compUserWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(user)}${smallUserWord} draw ${convertToWord(computer)}${compUserWord}. "`
}

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber)
    return choices[randomNumber]

}
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sr':
            win(userChoice,computerChoice);
            break;
        case 'sr':
        case 'rp':
        case 'rs':
            loose(userChoice, computerChoice);
            break;
        case 'ss':
        case 'pp':
        case 'rr':
            draw(userChoice, computerChoice);
            break;
   }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r")
    })
    
    paper_div.addEventListener('click', function () {
        game("p")
    })
    
    scissor_div.addEventListener('click', function () {
        game("s")
    })
}

main();
