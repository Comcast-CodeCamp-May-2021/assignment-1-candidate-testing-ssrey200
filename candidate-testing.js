const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = 'Sally Ride';
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters? ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "]
let correctAnswers = ["Sally Ride","true","40","Trajectory","3"]
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question(`Enter your name: \n`);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
   
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i]);
    // while (candidateAnswers[i] === "") {
    //   candidateAnswers[i] = input.question(questions[i]);
    // }
    console.log('\n');
  }
  //console.log(`---------------------------------------------------\n`);
}

function gradeQuiz(candidateAnswers) {
 
let grade = 0;
let correctAnswerCounter = 0;
console.log(`Candidate Name: ${candidateName}`);
console.log({candidateAnswers}, '\n');
  for (let i = 0; i < correctAnswers.length; i++) {
    console.log(`${i + 1}) ${questions[i]}`);
    console.log(`You answered: ${candidateAnswers[i]}`);
    if (candidateAnswers[i].toLowerCase() === (correctAnswers[i].toLowerCase())) {
      console.log(`That is correct!`);
      console.log(`\n`);
      correctAnswerCounter++
    } else {
      console.log(`Incorrect!`);
      console.log(`\n`);
    }
  }
  //console.log({correctAnswer})
  grade = correctAnswerCounter / 5 * 100;
  console.log(`>>> Overall Grade: ${grade}% (${correctAnswerCounter} of 5 responses correct) <<<`);
  if (grade / 5 * 100 >= 80) {
    console.log(`>>> Status: PASSED <<<`);
  } else {
    console.log(`>>> Status: FAILED <<<`);
  }
  return grade;
}



function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
    console.log(`Welcome, ${candidateName}! \n`);
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};