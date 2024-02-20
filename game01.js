const question = document.querySelector('#question');
const choice = Array.from(document.querySelector('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswer = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [{
        question: "Apakah Dimas Punya Pacar?",
        choice1: "tidak",
        choice2: "punya",
        choice3: "punya 2",
        choice4: "punya 3",
        answer: 1,
    },
    {
        question: "Jogja letaknya dimana?",
        choice1: "Jawa Tengah",
        choice2: "Ganjar",
        choice3: "Malaysia",
        choice4: "Tanggerang",
        answer: 1,
    },
    {
        question: "Coba Tebak jawaban yang benar yang mana",
        choice1: "ini",
        choice2: "pasti ini",
        choice3: "bukan yg ini",
        choice4: "lah",
        answer: 2,
    },
    {
        question: "siapa yang recal2?",
        choice1: "gibran",
        choice2: "prabowo",
        choice3: "Anis",
        choice4: "Ganjar",
        answer: 2,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    avaibleQuestions = [...question]
    getNewQuestion()
}

getNewQuestion = () => {
    if (avaibleQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }
}