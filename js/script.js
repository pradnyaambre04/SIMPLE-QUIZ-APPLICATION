function displayQuestions() {
    const quizElement = document.getElementById("quiz");

    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        const questionTitle = document.createElement("p");
        questionTitle.innerText = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionTitle);

        const optionsDiv = document.createElement("div");
        optionsDiv.classList.add("options");

        q.options.forEach(option => {
            const optionLabel = document.createElement("label");
            optionLabel.classList.add("option");

            const optionInput = document.createElement("input");
            optionInput.type = "radio";
            optionInput.name = `question-${index}`;
            optionInput.value = option;

            optionLabel.appendChild(optionInput);
            optionLabel.appendChild(document.createTextNode(option));
            optionsDiv.appendChild(optionLabel);
        });

        questionDiv.appendChild(optionsDiv);
        quizElement.appendChild(questionDiv);
    });
}

function submitQuiz() {
    let score = 0;

    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });

    showResult(score);
}

function showResult(score) {
    const resultElement = document.getElementById("result");
    const scoreElement = document.getElementById("score");
    const statusMessageElement = document.getElementById("statusMessage");

    document.getElementById("quizForm").style.display = "none";

    scoreElement.innerText = score;

    let statusMessage = "";
    if (score === questions.length) {
        statusMessage = "Excellent! You're a genius!";
    } else if (score >= questions.length / 2) {
        statusMessage = "Good job! Keep practicing.";
    } else {
        statusMessage = "Don't worry, try again!";
    }

    statusMessageElement.innerText = statusMessage;

    resultElement.style.display = "block";
}

// Initialize the quiz
displayQuestions();
