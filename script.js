const quizData = [
    {
        question: "Who is the current President of the United States?",
        a: "Barack Obama",
        b: "Donald Trump",
        c: "Joe Biden",
        d: "Kamala Harris",
        correct: "c"
    },
    {
        question: "What is the capital of the United States?",
        a: "New York",
        b: "Washington, D.C.",
        c: "Los Angeles",
        d: "Chicago",
        correct: "b"
    },
    {
        question: "Who is known as the 'Father of the Nation' in India?",
        a: "Jawaharlal Nehru",
        b: "Subhas Chandra Bose",
        c: "Mahatma Gandhi",
        d: "B. R. Ambedkar",
        correct: "c"
    },
    {
        question: "In which year did the Soviet Union collapse?",
        a: "1989",
        b: "1991",
        c: "1993",
        d: "1995",
        correct: "b"
    },
    {
        question: "Which country is the largest democracy in the world?",
        a: "China",
        b: "United States",
        c: "India",
        d: "Russia",
        correct: "c"
    }
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

function buildQuiz() {
    const output = [];

    quizData.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion) {
            if (letter !== 'question' && letter !== 'correct') {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion[letter]}
                    </label>`
                );
            }
        }

        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correct) {
            numCorrect++;
            answerContainer.style.color = 'lightgreen';
        } else {
            answerContainer.style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${quizData.length}`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);