import React from 'react';
import Header from './components/Header/Header'
import './App.css'
import QuizContainer from './components/Quiz/QuizContainer';

const App = (props) => {
  return (
    <div className="app">
        <Header />
        <div className="app-wrapper">
          <QuizContainer />
      </div>
    </div>
  )
}

export default App;