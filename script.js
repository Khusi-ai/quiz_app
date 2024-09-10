const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c"
    },
    {
        question: "Which language is used for web development?",
        a: "Python",
        b: "C++",
        c: "JavaScript",
        d: "Java",
        correct: "c"
    },
    {
        question: "Which HTML tag is used to define an image?",
        a: "<img>",
        b: "<picture>",
        c: "<image>",
        d: "<src>",
        correct: "a"
    }
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEls = document.querySelectorAll(".option");
const labels = [
    document.getElementById("label1"),
    document.getElementById("label2"),
    document.getElementById("label3"),
    document.getElementById("label4")
];
const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");
const scoreEl = document.getElementById("score");

loadQuiz();

function loadQuiz() {
    deselectOptions();
    
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    labels[0].innerText = currentQuizData.a;
    labels[1].innerText = currentQuizData.b;
    labels[2].innerText = currentQuizData.c;
    labels[3].innerText = currentQuizData.d;
}

function deselectOptions() {
    optionsEls.forEach(option => option.checked = false);
}

function getSelected() {
    let answer;
    optionsEls.forEach(option => {
        if(option.checked) {
            // Map option id to answer letter (a, b, c, d)
            if(option.id === "option1") answer = "a";
            else if(option.id === "option2") answer = "b";
            else if(option.id === "option3") answer = "c";
            else if(option.id === "option4") answer = "d";
        }
    });
    return answer;
}

submitBtn.addEventListener("click", () => {
    const selectedAnswer = getSelected();
    
    if(selectedAnswer) {
        if(selectedAnswer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            scoreEl.innerHTML = `You answered correctly ${score}/${quizData.length} questions.`;
            scoreEl.style.display = "block";
            submitBtn.style.display = "none";
            resetBtn.style.display = "inline-block";
        }
    }
});

resetBtn.addEventListener("click", () => {
    currentQuiz = 0;
    score = 0;
    scoreEl.style.display = "none";
    submitBtn.style.display = "inline-block";
    resetBtn.style.display = "none";
    loadQuiz();
});

