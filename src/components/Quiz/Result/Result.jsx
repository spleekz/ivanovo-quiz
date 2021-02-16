import React from 'react';
import QuizContainer from '../QuizContainer';
import './Result.css'

const Result = (props) => {

  let restartQuiz = () => {
    props.reset();
    props.startQuiz()
    return (
      <QuizContainer />
    )
  }

  let rightAnswersCount = props.rightDoneQuestions,
    questionsCount = props.totalQuestionsCount,
    rightAnswersPercents = Math.floor((props.rightDoneQuestions / props.totalQuestionsCount) * 100),
    resultDescription,
    resultClassName

  if ((rightAnswersPercents <= 100) && (rightAnswersPercents > 85)) {
    resultDescription = 'Поздравляем! Вы отлично знаете город Иваново!';
    resultClassName = ' excellent';
  }
  else if ((rightAnswersPercents <= 85) && (rightAnswersPercents > 50)) {
    resultDescription = 'Вы много знаете об Иванове, но...нет предела совершенству! ';
    resultClassName = ' well'
  }
  else if ((rightAnswersPercents <= 50) && (rightAnswersPercents > 25)) {
    resultDescription = 'Вы совсем немного занете о городе Иваново';
    resultClassName = ' good'
  }
  else {
    resultDescription = 'Ой-ой! Похоже, вы почти ничего не помните о городе Иваново';
    resultClassName = ' bad'
  }
  return (
    <div className="result">
      <div className={"result-title" + resultClassName}>
        Результат
      </div>
      <div className="result-description">
        <div className="result-conclusion">{resultDescription}
        </div>
        <div className="result-statistics">
          <div className="result-count"><span className='important'>Ваш результат: </span><span className={'count' + resultClassName}>{rightAnswersCount}/{questionsCount}</span></div>
          <div className="result-percent"><span className='important'>Вы ответили на </span><span className={'count' + resultClassName}>{rightAnswersPercents}%</span><span className='important'> вопросов</span></div>
        </div>
        <button className='start-quiz' onClick={restartQuiz} >Попробовать ещё раз</button>
      </div>
    </div>
  );
};

export default Result;