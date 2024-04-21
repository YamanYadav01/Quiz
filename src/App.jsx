import React from 'react';
import Quiz from './Quiz';
import './App.css';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'London', 'Rome'],
    answer: 'Paris'
  },
  {
    question: 'What is the largest mammal?',
    options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
    answer: 'Blue Whale'
  },
  {
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'CO2', 'N2O', 'CH4'],
    answer: 'H2O'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Mars'
  },
  {
    question: 'What is the capital of Australia?',
    options: ['Canberra', 'Sydney', 'Melbourne', 'Perth'],
    answer: 'Canberra'
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'Leo Tolstoy'],
    answer: 'William Shakespeare'
  },
  {
    question: 'What is the largest organ in the human body?',
    options: ['Liver', 'Heart', 'Brain', 'Skin'],
    answer: 'Skin'
  },
  {
    question: 'What is the result of the following expression: 5 + "5"?',
    options: ['55', '10', 'Error', 'undefined'],
    answer: '55'
  },
  {
    question: 'Which keyword is used to declare variables in JavaScript?',
    options: ['var', 'let', 'const', 'int'],
    answer: 'var'
  },
  {
    question: 'What will be logged to the console: console.log(typeof NaN)?',
    options: ['number', 'string', 'NaN', 'undefined'],
    answer: 'number'
  },
  {
    question: 'Which of the following is NOT a valid way to declare a function in JavaScript?',
    options: ['function myFunction() {}', 'const myFunction = function() {}', 'var myFunction = () => {}', 'myFunction() {}'],
    answer: 'myFunction() {}'
  },
  {
    question: 'What does the "this" keyword refer to in JavaScript?',
    options: ['The current function', 'The global object', 'The parent object', 'The calling object'],
    answer: 'The calling object'
  }
];

const App = () => {
  return (
    <div className="app">
      <h1>Quiz App</h1>
      <Quiz questions={questions} />
    </div>
  );
};

export default App;
