// Initialize and tie variables to DOM elements
var startBtn = document.querySelector('#begin');
var timeRemaining = 120;
var currentQuestion = 1;
var userAnswer = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;

document.querySelector('#questionText').innerHTML="When you press 'Begin Quiz', you will have 120 seconds to answer 10 questions. Each incorrect answer will deduct 5 seconds.";

// Hide questions until quiz is started
document.querySelector('#finalScore').style.display = "none";
document.querySelector('#ifIncorrect').style.display = "none";
document.querySelector('#ifCorrect').style.display = "none";
document.querySelector('#choiceOne').style.display = "none";
document.querySelector('#choiceTwo').style.display = "none";
document.querySelector('#choiceThree').style.display = "none";
document.querySelector('#choiceFour').style.display = "none";

// Queue "Ready?" and countdown timer, display the first question
function beginQuiz() {
    startCountdown();
    disableStartButton();
    document.querySelector('#begin').innerHTML="Ready?";
    setTimeout(() => {  displayQuestion() }, 1000); 

    choiceOne.addEventListener("click", event => {
        userAnswer = 1;
        evaluateAnswer(userAnswer);
    });
    choiceTwo.addEventListener("click", event => {
        userAnswer = 2;
        evaluateAnswer(userAnswer);
    });
    choiceThree.addEventListener("click", event => {
        userAnswer = 3;
        evaluateAnswer(userAnswer);
    });
    choiceFour.addEventListener("click", event => {
        userAnswer = 4;
        evaluateAnswer(userAnswer);
    });
}

// Countdown from timeRemaining
function startCountdown() {
var interval = setInterval(function(){

    if (timeRemaining === 0){
      clearInterval(interval);
      document.querySelector('#begin').innerHTML='Done';
      alert("You're out of time!");
      endQuiz(correctAnswers, incorrectAnswers);
    }

    document.querySelector('#begin').innerHTML=timeRemaining;
    timeRemaining--;
    
    }, 1000);

}

// Display each question and addEventListener to each button
function displayQuestion() {

    if (currentQuestion == 11) {
        document.querySelector('#choiceOne').style.display = "none";
        document.querySelector('#choiceTwo').style.display = "none";
        document.querySelector('#choiceThree').style.display = "none";
        document.querySelector('#choiceFour').style.display = "none";
        endQuiz(correctAnswers, incorrectAnswers);
    }

    userAnswer = 0;

    document.querySelector('#choiceOne').style.backgroundColor = "#bdbdbd";
    document.querySelector('#choiceTwo').style.backgroundColor = "#bdbdbd";
    document.querySelector('#choiceThree').style.backgroundColor = "#bdbdbd";
    document.querySelector('#choiceFour').style.backgroundColor = "#bdbdbd";
    document.querySelector('#ifIncorrect').style.display = "none";
    document.querySelector('#ifCorrect').style.display = "none";


    if (currentQuestion == 1) {
    document.querySelector('#questionText').innerHTML = "1/10. Which HTML element do we put JavaScript inside?";
    document.getElementById('choiceOne').innerHTML = "javascript";
    document.getElementById('choiceTwo').innerHTML = "js";
    document.getElementById('choiceThree').innerHTML = "jsc";
    document.getElementById('choiceFour').innerHTML = "script"; // correct
    }
    
    if (currentQuestion == 2) {
    document.querySelector('#questionText').innerHTML = "2/10. What HTML attribute is used to reference an external JavaScript file?";
    document.getElementById('choiceOne').innerHTML = "source";
    document.getElementById('choiceTwo').innerHTML = "src"; // correct
    document.getElementById('choiceThree').innerHTML = "script-source";
    document.getElementById('choiceFour').innerHTML = "source-js"; 
    }
    
    if (currentQuestion == 3) {
    document.querySelector('#questionText').innerHTML = "3/10. What JavaScript statement ends a function execution and specifies a value to send back to the function caller?";
    document.getElementById('choiceOne').innerHTML = "return"; // correct
    document.getElementById('choiceTwo').innerHTML = "break"; 
    document.getElementById('choiceThree').innerHTML = "send";
    document.getElementById('choiceFour').innerHTML = "concat"; 
    }
    
    if (currentQuestion == 4) {
    document.querySelector('#questionText').innerHTML = "4/10. Which JavaScript method did I use to enable response from these buttons?";
    document.getElementById('choiceOne').innerHTML = "addEventTarget"; 
    document.getElementById('choiceTwo').innerHTML = "addEvent"; 
    document.getElementById('choiceThree').innerHTML = "addEventListener"; // correct
    document.getElementById('choiceFour').innerHTML = "Event.button"; 
    }
    
    if (currentQuestion == 5) {
    document.querySelector('#questionText').innerHTML = "5/10. Which method would be used to remove and return the last element in an array?";
    document.getElementById('choiceOne').innerHTML = "pop()";  // correct
    document.getElementById('choiceTwo').innerHTML = "push()"; 
    document.getElementById('choiceThree').innerHTML = "shift()";
    document.getElementById('choiceFour').innerHTML = "splice()"; 
    }
    
    if (currentQuestion == 6) {
    document.querySelector('#questionText').innerHTML = "6/10. Which operand means 'strictly equal', meaning 'true' is only returned if the values are the same, and same type.";
    document.getElementById('choiceOne').innerHTML = "="; 
    document.getElementById('choiceTwo').innerHTML = "=="; 
    document.getElementById('choiceThree').innerHTML = "==="; // correct
    document.getElementById('choiceFour').innerHTML = "none of the above"; 
    }
    
    if (currentQuestion == 7) {
    document.querySelector('#questionText').innerHTML = "7/10. Which is NOT a way to declare a variable in JavaScript?";
    document.getElementById('choiceOne').innerHTML = "var"; 
    document.getElementById('choiceTwo').innerHTML = "let"; 
    document.getElementById('choiceThree').innerHTML = "int"; // correct
    document.getElementById('choiceFour').innerHTML = "const"; 
    }
    
    if (currentQuestion == 8) {
    document.querySelector('#questionText').innerHTML = "8/10. Initializing the variable 'x' as 'let x;' would assign it a value of _________.";
    document.getElementById('choiceOne').innerHTML = "0"; 
    document.getElementById('choiceTwo').innerHTML = "null"; 
    document.getElementById('choiceThree').innerHTML = "undefined"; // correct
    document.getElementById('choiceFour').innerHTML = "it wouldn't compile"; 
    }
    
    if (currentQuestion == 9) {
    document.querySelector('#questionText').innerHTML = "9/10. The accessibility (or visibility) of variables is referred to as _________.";
    document.getElementById('choiceOne').innerHTML = ("hoist"); 
    document.getElementById('choiceTwo').innerHTML = ("scope");  // correct
    document.getElementById('choiceThree').innerHTML = ("log");
    document.getElementById('choiceFour').innerHTML = ("query"); 
    }
    
    if (currentQuestion == 10) {
    document.querySelector('#questionText').innerHTML = "10/10. In jQuery, which of the following correctly selects an HTML element with the ID 'testElement'?";
    document.getElementById('choiceOne').innerHTML = ("$('testElement')"); 
    document.getElementById('choiceTwo').innerHTML = ("$('.testElement')"); 
    document.getElementById('choiceThree').innerHTML = ("$('#testElement')"); // correct 
    document.getElementById('choiceFour').innerHTML = '$("*")'; 
    }

    if (currentQuestion < 10) {// Display answer choices
    document.querySelector('#choiceOne').style.display = "list-item";
    document.querySelector('#choiceTwo').style.display = "list-item";
    document.querySelector('#choiceThree').style.display = "list-item";
    document.querySelector('#choiceFour').style.display = "list-item";

    console.log("Current Question: " + currentQuestion);
    }
}

// Yes this could've been done more efficiently
// Evaluates the userAnswer versus each currentQuestion and displays result (will only progress if correct)
// 
function evaluateAnswer(userAnswer) {

    console.log("Question: " + currentQuestion + " | User Answer: " + userAnswer);

    // QUESTION 1 CONDITIONS
    if (currentQuestion == 1 && userAnswer != 4) {
        document.querySelector('#ifIncorrect').style.display = "inline";
        incorrectAnswers++;
        timeRemaining-=5;
    }
    if (currentQuestion == 1 && userAnswer == 4) {
        document.querySelector('#ifIncorrect').style.display = "none";
        document.querySelector('#choiceOne').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#choiceTwo').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#choiceThree').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#choiceFour').style.backgroundColor = "rgb(111, 255, 111)";
        document.querySelector('#ifCorrect').style.display = "inline";
        currentQuestion++;
        correctAnswers++;
        document.querySelector('#choiceOne').removeEventListener("click", event => {
            userAnswer = 1;
            evaluateAnswer();
        });
        document.querySelector('#choiceTwo').removeEventListener("click", event => {
            userAnswer = 2;
            evaluateAnswer();
        });
        document.querySelector('#choiceThree').removeEventListener("click", event => {
            userAnswer = 3;
            evaluateAnswer();
        });
        document.querySelector('#choiceFour').removeEventListener("click", event => {
            userAnswer = 4;
            evaluateAnswer();
        });
        setTimeout(() => {  displayQuestion()  }, 1500);
        return null;
        }

    // QUESTION 2 CONDITIONS
    if (currentQuestion == 2 && userAnswer != 2) {
        document.querySelector('#ifIncorrect').style.display = "inline";
        incorrectAnswers++;
        timeRemaining-=5;
    }
    if (currentQuestion == 2 && userAnswer == 2) {
        document.querySelector('#ifIncorrect').style.display = "none";
        document.querySelector('#choiceOne').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#choiceTwo').style.backgroundColor = "rgb(111, 255, 111)";
        document.querySelector('#choiceThree').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#choiceFour').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#ifCorrect').style.display = "inline";
        currentQuestion++;
        correctAnswers++;
        document.querySelector('#choiceOne').removeEventListener("click", event => {
            userAnswer = 1;
            evaluateAnswer();
        });
        document.querySelector('#choiceTwo').removeEventListener("click", event => {
            userAnswer = 2;
            evaluateAnswer();
        });
        document.querySelector('#choiceThree').removeEventListener("click", event => {
            userAnswer = 3;
            evaluateAnswer();
        });
        document.querySelector('#choiceFour').removeEventListener("click", event => {
            userAnswer = 4;
            evaluateAnswer();
        });
        setTimeout(() => {  displayQuestion()  }, 1500);
        return null;
    }

    // QUESTION 3 CONDITIONS
    if (currentQuestion == 3 && userAnswer != 1) {
        document.querySelector('#ifIncorrect').style.display = "inline";
        incorrectAnswers++;
        timeRemaining-=5;
    }
    if (currentQuestion == 3 && userAnswer == 1) {
        document.querySelector('#ifIncorrect').style.display = "none";
        document.querySelector('#choiceOne').style.backgroundColor = "rgb(111, 255, 111)";
        document.querySelector('#choiceTwo').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#choiceThree').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#choiceFour').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#ifCorrect').style.display = "inline";
        currentQuestion++;
        correctAnswers++;
        document.querySelector('#choiceOne').removeEventListener("click", event => {
            userAnswer = 1;
            evaluateAnswer();
        });
        document.querySelector('#choiceTwo').removeEventListener("click", event => {
            userAnswer = 2;
            evaluateAnswer();
        });
        document.querySelector('#choiceThree').removeEventListener("click", event => {
            userAnswer = 3;
            evaluateAnswer();
        });
        document.querySelector('#choiceFour').removeEventListener("click", event => {
            userAnswer = 4;
            evaluateAnswer();
        });
        setTimeout(() => {  displayQuestion()  }, 1500);
        return null;
    }

    // QUESTION 4 CONDITIONS
    if (currentQuestion == 4 && userAnswer != 3) {
        document.querySelector('#ifIncorrect').style.display = "inline";
        incorrectAnswers++;
        timeRemaining-=5;
    }
    if (currentQuestion == 4 && userAnswer == 3) {
        document.querySelector('#ifIncorrect').style.display = "none";
        document.querySelector('#choiceOne').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#choiceTwo').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#choiceThree').style.backgroundColor = "rgb(111, 255, 111)";
        document.querySelector('#choiceFour').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#ifCorrect').style.display = "inline";
        currentQuestion++;
        correctAnswers++;
        document.querySelector('#choiceOne').removeEventListener("click", event => {
            userAnswer = 1;
            evaluateAnswer();
        });
        document.querySelector('#choiceTwo').removeEventListener("click", event => {
            userAnswer = 2;
            evaluateAnswer();
        });
        document.querySelector('#choiceThree').removeEventListener("click", event => {
            userAnswer = 3;
            evaluateAnswer();
        });
        document.querySelector('#choiceFour').removeEventListener("click", event => {
            userAnswer = 4;
            evaluateAnswer();
        });
        setTimeout(() => {  displayQuestion()  }, 1500);
        return null;
    }

    // QUESTION 5 CONDITIONS
    if (currentQuestion == 5 && userAnswer != 1) {
        document.querySelector('#ifIncorrect').style.display = "inline";
        incorrectAnswers++;
        timeRemaining-=5;
    }
    if (currentQuestion == 5 && userAnswer == 1) {
        document.querySelector('#ifIncorrect').style.display = "none";
        document.querySelector('#choiceOne').style.backgroundColor = "rgb(111, 255, 111)";
        document.querySelector('#choiceTwo').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#choiceThree').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#choiceFour').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#ifCorrect').style.display = "inline";
        currentQuestion++;
        correctAnswers++;
        document.querySelector('#choiceOne').removeEventListener("click", event => {
            userAnswer = 1;
            evaluateAnswer();
        });
        document.querySelector('#choiceTwo').removeEventListener("click", event => {
            userAnswer = 2;
            evaluateAnswer();
        });
        document.querySelector('#choiceThree').removeEventListener("click", event => {
            userAnswer = 3;
            evaluateAnswer();
        });
        document.querySelector('#choiceFour').removeEventListener("click", event => {
            userAnswer = 4;
            evaluateAnswer();
        });
        setTimeout(() => {  displayQuestion()  }, 1500);
        return null;
    }

    // QUESTION 6 CONDITIONS
    if (currentQuestion == 6 && userAnswer != 3) {
        document.querySelector('#ifIncorrect').style.display = "inline";
        incorrectAnswers++;
        timeRemaining-=5;
    }
    if (currentQuestion == 6 && userAnswer == 3) {
        document.querySelector('#ifIncorrect').style.display = "none";
        document.querySelector('#choiceOne').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#choiceTwo').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#choiceThree').style.backgroundColor = "rgb(111, 255, 111)";
        document.querySelector('#choiceFour').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#ifCorrect').style.display = "inline";
        currentQuestion++;
        correctAnswers++;
        document.querySelector('#choiceOne').removeEventListener("click", event => {
            userAnswer = 1;
            evaluateAnswer();
        });
        document.querySelector('#choiceTwo').removeEventListener("click", event => {
            userAnswer = 2;
            evaluateAnswer();
        });
        document.querySelector('#choiceThree').removeEventListener("click", event => {
            userAnswer = 3;
            evaluateAnswer();
        });
        document.querySelector('#choiceFour').removeEventListener("click", event => {
            userAnswer = 4;
            evaluateAnswer();
        });
        setTimeout(() => {  displayQuestion()  }, 1500);
        return null;
    }

    // QUESTION 7 CONDITIONS
    if (currentQuestion == 7 && userAnswer != 3) {
        document.querySelector('#ifIncorrect').style.display = "inline";
        incorrectAnswers++;
        timeRemaining-=5;
    }
    if (currentQuestion == 7 && userAnswer == 3) {
        document.querySelector('#ifIncorrect').style.display = "none";
        document.querySelector('#choiceOne').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#choiceTwo').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#choiceThree').style.backgroundColor = "rgb(111, 255, 111)";
        document.querySelector('#choiceFour').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#ifCorrect').style.display = "inline";
        currentQuestion++;
        correctAnswers++;
        document.querySelector('#choiceOne').removeEventListener("click", event => {
            userAnswer = 1;
            evaluateAnswer();
        });
        document.querySelector('#choiceTwo').removeEventListener("click", event => {
            userAnswer = 2;
            evaluateAnswer();
        });
        document.querySelector('#choiceThree').removeEventListener("click", event => {
            userAnswer = 3;
            evaluateAnswer();
        });
        document.querySelector('#choiceFour').removeEventListener("click", event => {
            userAnswer = 4;
            evaluateAnswer();
        });
        setTimeout(() => {  displayQuestion()  }, 1500);
        return null;
    }

    // QUESTION 8 CONDITIONS
    if (currentQuestion == 8 && userAnswer != 3) {
        document.querySelector('#ifIncorrect').style.display = "inline";
        incorrectAnswers++;
        timeRemaining-=5;
    }
    if (currentQuestion == 8 && userAnswer == 3) {
        document.querySelector('#ifIncorrect').style.display = "none";
        document.querySelector('#choiceOne').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#choiceTwo').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#choiceThree').style.backgroundColor = "rgb(111, 255, 111)";
        document.querySelector('#choiceFour').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#ifCorrect').style.display = "inline";
        currentQuestion++;
        correctAnswers++;
        document.querySelector('#choiceOne').removeEventListener("click", event => {
            userAnswer = 1;
            evaluateAnswer();
        });
        document.querySelector('#choiceTwo').removeEventListener("click", event => {
            userAnswer = 2;
            evaluateAnswer();
        });
        document.querySelector('#choiceThree').removeEventListener("click", event => {
            userAnswer = 3;
            evaluateAnswer();
        });
        document.querySelector('#choiceFour').removeEventListener("click", event => {
            userAnswer = 4;
            evaluateAnswer();
        });
        setTimeout(() => {  displayQuestion()  }, 1500);
        return null;
    }

    // QUESTION 9 CONDITIONS
    if (currentQuestion == 9 && userAnswer != 2) {
        document.querySelector('#ifIncorrect').style.display = "inline";
        incorrectAnswers++;
        timeRemaining-=5;
    }
    if (currentQuestion == 9 && userAnswer == 2) {
        document.querySelector('#ifIncorrect').style.display = "none";
        document.querySelector('#choiceOne').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#choiceTwo').style.backgroundColor = "rgb(111, 255, 111)";
        document.querySelector('#choiceThree').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#choiceFour').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#ifCorrect').style.display = "inline";
        currentQuestion++;
        correctAnswers++;
        document.querySelector('#choiceOne').removeEventListener("click", event => {
            userAnswer = 1;
            evaluateAnswer();
        });
        document.querySelector('#choiceTwo').removeEventListener("click", event => {
            userAnswer = 2;
            evaluateAnswer();
        });
        document.querySelector('#choiceThree').removeEventListener("click", event => {
            userAnswer = 3;
            evaluateAnswer();
        });
        document.querySelector('#choiceFour').removeEventListener("click", event => {
            userAnswer = 4;
            evaluateAnswer();
        });
        setTimeout(() => {  displayQuestion()  }, 1500);
        return null;
    }

    // QUESTION 10 CONDITIONS
    if (currentQuestion == 10 && userAnswer != 3) {
        document.querySelector('#ifIncorrect').style.display = "inline";
        incorrectAnswers++;
        timeRemaining-=5;
    }
    if (currentQuestion == 10 && userAnswer == 3) {
        document.querySelector('#ifIncorrect').style.display = "none";
        document.querySelector('#choiceOne').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#choiceTwo').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#choiceThree').style.backgroundColor = "rgb(111, 255, 111)";
        document.querySelector('#choiceFour').style.backgroundColor = "rgb(255, 121, 121)";
        document.querySelector('#ifCorrect').style.display = "inline";
        currentQuestion++;
        correctAnswers++;
        document.querySelector('#choiceOne').removeEventListener("click", event => {
            userAnswer = 1;
            evaluateAnswer();
        });
        document.querySelector('#choiceTwo').removeEventListener("click", event => {
            userAnswer = 2;
            evaluateAnswer();
        });
        document.querySelector('#choiceThree').removeEventListener("click", event => {
            userAnswer = 3;
            evaluateAnswer();
        });
        document.querySelector('#choiceFour').removeEventListener("click", event => {
            userAnswer = 4;
            evaluateAnswer();
        });
        setTimeout(() => {  displayQuestion()  }, 1500);
        return null;
    }
}

function disableStartButton() {
    startBtn.removeEventListener("click", beginQuiz);
}

function endQuiz(correctAnswers, incorrectAnswers) {

    document.querySelector('#ifIncorrect').style.display = "none";
    document.querySelector('#ifCorrect').style.display = "none";
    document.querySelector('#choiceOne').style.display = "none";
    document.querySelector('#choiceTwo').style.display = "none";
    document.querySelector('#choiceThree').style.display = "none";
    document.querySelector('#choiceFour').style.display = "none";

    document.querySelector('#finalScore').style.display = "inline";
    document.querySelector('#finalScore').innerHTML = "You had " + correctAnswers + " correct answers and " + incorrectAnswers + " incorrect answers. Your score is " + Math.floor((100 - (incorrectAnswers * 3))) + "/100.";

}

startBtn.addEventListener("click", beginQuiz);