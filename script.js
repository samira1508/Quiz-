const questions = [
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Paris", correct: true },
        { text: "London", correct: false },
        { text: "Berlin", correct: false },
        { text: "Rome", correct: false }
      ]
    },
    {
      question: "What is the currency of Japan?",
      answers: [
        { text: "Euro", correct: false },
        { text: "Yen", correct: true },
        { text: "Dollar", correct: false },
        { text: "Pound", correct: false }
      ]
    },
    {
      question: "What is the largest ocean in the world?",
      answers: [
        { text: "Atlantic", correct: false },
        { text: "Indian", correct: false },
        { text: "Arctic", correct: false },
        { text: "Pacific", correct: true }
      ]
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const answerEls = Array.from(document.getElementsByClassName("answer"));
  const progressEl = document.getElementById("progress");
  const scoreEl = document.getElementById("score");
  const correctAnswerEl = document.getElementById("correct-answer");
  
  showQuestion();
  
  answerEls.forEach(answerEl => {
    answerEl.addEventListener("click", e => {
      const selectedAnswer = questions[currentQuestion].answers.find(
        answer => answer.text === e.target.innerText
      );
      if (selectedAnswer.correct) {
        score++;
      }
      if (currentQuestion + 1 === questions.length) {
        scoreEl.innerText = `Score: ${score}/${questions.length}`;
        scoreEl.style.display = "block";
        // Show the correct answers for each question
        for (let i = 0; i < questions.length; i++) {
          const correctAnswer = questions[i].answers.find(answer => answer.correct).text;
          correctAnswerEl.innerText += `Question ${i + 1}: ${correctAnswer}\n`;
        }
        correctAnswerEl.style.display = "block";
      } else {
        currentQuestion++;
        showQuestion();
      }
    });
  });
  
  function showQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionEl.innerText = currentQuestionData.question;
    answerEls.forEach((answerEl, index) => {
      answerEl.innerText = currentQuestionData.answers[index].text;
    });
    progressEl.innerText = `Question ${currentQuestion + 1} of ${
      questions.length
    }`;
  }
