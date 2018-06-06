import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const value1 = Math.floor(Math.random() * 100);
// const value2 = Math.floor(Math.random() * 100);
// const value3 = Math.floor(Math.random() * 100);
// const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
// const numQuestions = 0;
// const numCorrect = 0;

class App extends Component {
  // state = {
  //   value1: Math.floor(Math.random() * 100),
  //   value2: Math.floor(Math.random() * 100),
  //   value3: Math.floor(Math.random() * 100),
  //   proposedAnswer:  Math.floor(Math.random() * 3) + this.value1 + this.value2 + this.value3,
  //   numQuestions: 0,
  //   numCorrect: 0
  // }
  constructor(props) {
    super(props);
    const initState = this.createNewQuestion();
    initState['numQuestions'] = 0;
    initState['numCorrect'] = 0;
    this.state = initState;
  }

  createNewQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);

    return {
      value1: value1,
      value2: value2,
      value3: value3,
      proposedAnswer: proposedAnswer
    }
  };

  // state = this.createNewQuestion().assign({numQuestions: 0, numCorrect: 0});

  submitResults = (event) => {
    const newValue1 = Math.floor(Math.random() * 100);
    const newValue2 = Math.floor(Math.random() * 100);
    const newValue3 = Math.floor(Math.random() * 100);
    const newProposedAnswer = Math.floor(Math.random() * 3) + (newValue1 + newValue2 + newValue3);
    const userAnswer = (event.target.name === 'true')
    const {value1, value2, value3, proposedAnswer} = this.state;
    if(((value1 + value2 + value3) === proposedAnswer) === userAnswer){
      this.setState(currentState => ({
        numQuestions: currentState.numQuestions + 1,
        numCorrect: currentState.numCorrect + 1,
        value1: newValue1,
        value2: newValue2,
        value3: newValue3,
        proposedAnswer: newProposedAnswer
      }));
    }else{
      this.setState( currentState => ({
        numQuestions: currentState.numQuestions + 1,
        value1: newValue1,
        value2: newValue2,
        value3: newValue3,
        proposedAnswer: newProposedAnswer
      }));
    }
  }
  render() {
    const {value1, value2, value3, proposedAnswer, numCorrect, numQuestions} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={this.submitResults} name='true'>True</button>
          <button onClick={this.submitResults} name='false'>False</button>
          <p className="text">
            Your Score: {numCorrect}/{numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
