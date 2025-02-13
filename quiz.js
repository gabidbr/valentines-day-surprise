const questions = [
    {
      question: "Unde ne-am întâlnit prima dată?",
      options: ["La o cafenea", "In curtea scolii", "La o cabană"],
      correctAnswer: "La o cabană",
      wrongAnswerMessage: "Oops! Ai ales greșit... dar te iert pentru că ești iubirea mea!"
    },
    {
      question: "Ce am purtat în ziua în care ne-am cunoscut?",
      options: ["Tricou alb si blugi", "O ținută casual", "Pijama", "Hanorac albastru si tricoul Gymshark"],
      correctAnswer: "Hanorac albastru si tricoul Gymshark",
      wrongAnswerMessage: "Oh nu! Hello Kitty tocmai a leșinat de șoc!"
    },
    {
      question: "Care este mâncarea mea preferată?",
      options: ["Pizza 🍕", "Paste 🍝", "Gratare"],
      correctAnswer: "Gratare",
      wrongAnswerMessage: "Nu e răspunsul corect"
    },
    {
      question: "Dacă ar fi să călătorim oriunde mâine, unde aș vrea să mergem?",
      options: ["Paris", "O cabană în munți", "Dubai", "Spania"],
      correctAnswer: "Spania",
      wrongAnswerMessage: "Am crezut ca ma cunosti mai bine"
    },
    {
      question: "Care este porecla mea preferată pentru tine?",
      options: ["Pui", "Andruta", "Chiurca", "Sorecule"],
      correctAnswer: "Sorecule",
      wrongAnswerMessage: "Daca nu raspunzi corect, Hello Kitty moare"
    },
    {
      question: "Ce aș prefera să facem de Valentine's Day?",
      options: ["Sa mergem in club", "Să mâncăm fast food și să jucăm CS2 😂🎮", "O cină romantică"],
      correctAnswer: "O cină romantică",
      wrongAnswerMessage: "Mai încearcă! 💖"
    }
  ];
  
  let currentQuestion = 0;
  const questionElement = document.getElementById('question');
  const optionsDiv = document.getElementById('options');
  const feedbackDiv = document.getElementById('feedback');
  
  function showQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    optionsDiv.innerHTML = ''; // Clear previous options
  
    q.options.forEach(option => {
      const button = document.createElement('button');
      button.classList.add('option-button');
      button.textContent = option;
      button.addEventListener('click', () => checkAnswer(option));
      optionsDiv.appendChild(button);
    });
  }
  
  function checkAnswer(selectedAnswer) {
    const q = questions[currentQuestion];
    if (selectedAnswer === q.correctAnswer) {
      feedbackDiv.textContent = "Corect! 🎉";
      feedbackDiv.className = 'correct'; // Add green color for correct answers
      currentQuestion++;
      if (currentQuestion < questions.length) {
        setTimeout(() => {
          feedbackDiv.textContent = '';
          showQuestion();
        }, 1000);
      } else {
        // All questions answered correctly, redirect to final page
        window.location.href = 'final.html';
      }
    } else {
      feedbackDiv.textContent = q.wrongAnswerMessage; // Show custom error message
      feedbackDiv.className = 'incorrect'; // Add red color for wrong answers
    }
  }
  
  showQuestion();
  
  const helloKittyContainer = document.getElementById('hello-kitty-container');
  
  function createHelloKitty() {
    const helloKitty = document.createElement('img');
    helloKitty.src = 'hellokitty2.png'; // Path to your Hello Kitty image
    helloKitty.classList.add('hello-kitty-image');
  
    // Random position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    helloKitty.style.left = `${x}px`;
    helloKitty.style.top = `${y}px`;
  
    // Random rotation
    const rotation = Math.random() * 360;
    helloKitty.style.transform = `rotate(${rotation}deg)`;
  
    helloKittyContainer.appendChild(helloKitty);
  
    // Remove the image after a while to avoid clutter
    setTimeout(() => {
      helloKitty.remove();
    }, 10000); // Remove after 10 seconds
  }
  
  // Create multiple Hello Kitty images
  setInterval(createHelloKitty, 1000); // Add a new image every 1 second