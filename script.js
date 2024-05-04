const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("enter");

const trueBtn = document.getElementById("true");
const falseBtn = document.getElementById("false");

const userScore = document.getElementById("question-score");
const totalScore = document.getElementById("total-questions");
const questionText = document.getElementById("question-text");

const questionNumber = document.getElementById("question-number");
const outOf = document.getElementById("out-of");

let currentQuestion = 0;
let score = 0;

let questions = [
    {
        question: "Is the sky blue?",
        answers: [
            {option: "Yes it is!", answer: true},
            {option: "No, not at all.", answer: false},
        ]
    },
    {
        question: "What is my first full name?",
        answers: [
            {option: "Demi", answer: false},
            {option: "Demiladeogo", answer: true},
        ]
    },
    {
 
        question: "What superpwer is better?",
        answers: [
            {option: "To rewrite reality", answer: true},
            {option: "To control time", answer: false},
        ]
    }
]

restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
submitBtn.addEventListener("click", submit);

function beginQuiz() {
    console.log("testing");
    currentQuestion = 0;
    questionNum = questions.length / questions.length;
    questionNumber.innerHTML = questionNum;
    totalScore.innerHTML = questions.length;
    outOf.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
 
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
 
    prevBtn.classList.add("hide");
}
 
beginQuiz();
 
function restart() {
    currentQuestion = 0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    trueBtn.classList.remove("hide");
    falseBtn.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
}

function next() {
    currentQuestion++;
    if(currentQuestion >= 2) {
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    if(currentQuestion == 0) {
        questionNumber.innerHTML = 1;
    }
    if(currentQuestion == 1) {
        questionNumber.innerHTML = 2;
    }
    if(currentQuestion == 2) {
        questionNumber.innerHTML = 3;
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
 
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
 
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
 
    prevBtn.classList.remove("hide");
}

function prev() {
    currentQuestion--;
    questionNum = questionNum -1;
    if(currentQuestion <= 0) {
        nextBtn.classList.remove("hide");
        prevBtn.classList.add("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
 
 
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
 
    nextBtn.classList.remove("hide");
}

function submit() {
    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    trueBtn.classList.add("hide");
    falseBtn.classList.add("hide");   
    questionText.innerHTML ="Congratulations on submitting the Quiz!"
}