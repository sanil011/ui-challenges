const questionElement = document.getElementById("question");
const nextButton = document.getElementById("next");
const optionsElement = document.getElementById("options");

const questionAndAnswer = [
    { id: "0", question: "Which is the largest animal in the world?", Answer: "Whale", option: ["Tiger", "Elephant", "Whale", "Genda"] },
    { id: "1", question: "Which is the largest animal in the world?", Answer: "Whale", option: ["Tiger", "Elephant", "Whale", "Genda"] },
    { id: "2", question: "Which is the largest animal in the world?", Answer: "Whale", option: ["Tiger", "Elephant", "Whale", "Genda"] },
    { id: "3", question: "Which is the largest animal in the world?", Answer: "Whale", option: ["Tiger", "Elephant", "Whale", "Genda"] }
]

let clickedOption;
let currentQuestionId;
let score;

function showScore() {
    resetState();
    questionElement.innerText = `You scored ${score} out of ${questionAndAnswer.length}!`;
    nextButton.style.display = 'block';
    nextButton.innerHTML = 'Play Again'
}


function handleNextButton() {
    currentQuestionId++;
    if (currentQuestionId < questionAndAnswer.length) {
        showQuestion()
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", (e) => {
    if (currentQuestionId < questionAndAnswer.length) {
        handleNextButton();
    } else {
        start();
    }
})

function resetState() {
    nextButton.style.display = 'none';
    while (optionsElement.firstChild) {
        optionsElement.removeChild(optionsElement.firstChild )
    }
}

function showQuestion() {
    resetState();
    let currentQuestion = questionAndAnswer[currentQuestionId];
    let question = currentQuestion.question;
    questionElement.innerHTML = question;

    currentQuestion.option.forEach((db) => {
        const button = document.createElement("button");
        button.innerHTML = db;
        button.classList.add('option');
        optionsElement.appendChild(button);
        button.addEventListener("click", (e) => {
            let flag = false;
            clickedOption = e.target.innerText;
            let obj = questionAndAnswer.filter(db => db.id == currentQuestionId)
            if (clickedOption == obj[0].Answer) {
                e.target.classList.add("correct");
                score++;
                flag = true;
            } else {
                e.target.classList.add("incorrect");
            }
            Array.from(optionsElement.children).forEach(db => {
                if (!flag) {
                    if (db.innerText == obj[0].Answer) {
                        db.classList.add("correct")
                    }
                }
                db.disabled = true;
            })
            nextButton.style.display = 'block';

        })
    });
}

function start() {
    currentQuestionId = 0;
    nextButton.innerText = 'Next';
    score = 0;
    showQuestion()
}
start();