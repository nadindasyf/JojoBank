
var img = document.createElement("gambar");
img.src = "Kertas 20.000.jpg";
var src = document.getElementById("gambar");
src.appendChild(img);

const questions = [
    {
        question: "Di Indonesia, mata uangnya disebut ....",
        answers: [
            {text: "Rupee", correct: false},
            {text: "Dollar", correct: false},
            {text: "Ringgit", correct: false},
            {text: "Rupiah", correct: true}
        ]
    },
    {
        question: "Rupiah dilambangkan dengan?",
        answers: [
            {text: "R$", correct: false},
            {text: "Rp", correct: true},
            {text: "$", correct: false},
            {text: "Rup", correct: false}
        ]
    },
    {
        question: "Berapa total penjumlahan uang: 2 lembar uang kertas 2.000 + 1 uang logam 1.000 + 2 lembar uang kertas 5.000",
        answers: [
            {text: "Rp 15.000", correct: true},
            {text: "Rp 20.000", correct: false},
            {text: "Rp 1.000", correct: false},
            {text: "Rp 50.000", correct: false}
        ]
    },
    {
        question: "Penjumlahan uang mana yang paling besar?",
        answers: [
            {text: "Rp 1.000 + Rp 2.000", correct: false},
            {text: "Rp 5.000 + Rp 2.000", correct: false},
            {text: "Rp 10.000 + Rp 5.000", correct: true},
            {text: "Rp 10.000 + Rp 500", correct: false}
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("quiz-jwbn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0; 
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetQuestion();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("asw-btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetQuestion(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        nextQuestion();
    }else{
        startQuiz();
    }
})

function nextQuestion(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        displayScore();
    }
}

function displayScore(){
    resetQuestion();
    totalScore = score * 25;
    questionElement.innerHTML = `Nilaimu adalah ${totalScore}!`;
    nextButton.innerHTML = "Ulang Quiz";
    nextButton.style.display = "block";
}


startQuiz();
