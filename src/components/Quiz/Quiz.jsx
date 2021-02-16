import React from 'react';
import Description from './Description/Description';
import './Quiz.css'
import Result from './Result/Result';

const Quiz = (props) => {
  let optionClassName = 'option';

  if (props.currentQuestion === props.totalQuestionsCount + 1) {
    props.endQuiz();
    return <Result {...props} />
  }

  if (!props.quizInProgress) {
    return (
      <Description {...props} />
    )
  }

  let question
  props.questions.forEach((q) => {
    if (q.id === props.currentQuestion) {
      question = q;
    }
  })

  let setAnswer = (currentQuestion, answerId) => {
    props.setAnswer(currentQuestion, answerId);
    setTimeout(props.changeQuestion, 1900);
  };

  return (
    <div className="quiz">
      <div className="quiz-block">
        <div className="question">
          <div className="question-content">
            {question.name}
          </div>
        </div>
        <ul className="answers">
          {question.answers.map((answer) => {
            if ((answer.isSelected) && (answer.isRight)) {
              optionClassName = 'option selected';
            }
            else if ((answer.isSelected) && !(answer.isRight)) {
              optionClassName = 'option no-selected'
            }
            else if (!answer.isSelected) {
              optionClassName = 'option'
            }
            return (
              <button className={optionClassName} key={answer.id}
                onClick={() => { setAnswer(props.currentQuestion, answer.id); props.setRightDoneQuestions(props.currentQuestion) }}
                disabled={question.answers.some(answer => answer.isSelected)}>
                <div className="option-content">
                  {answer.name}
                </div>
              </button>
            )
          })}
        </ul>
        <div className="total-count">Вопрос {props.currentQuestion}/{props.totalQuestionsCount}</div>
      </div>
    </div>
  )
}
export default Quiz;