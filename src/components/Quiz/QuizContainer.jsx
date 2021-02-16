import { connect } from 'react-redux';
import { changeQuestion, endQuiz, reset, setAnswer, setRightDoneQuestions, startQuiz, } from '../../redux/reducers/QuizReducer';
import Quiz from './Quiz';

let mapStateToProps = (state) => {
  return {
    questions: state.quiz.questions,
    quizInProgress: state.quiz.quizInProgress,
    totalQuestionsCount: state.quiz.totalQuestionsCount,
    currentQuestion:state.quiz.currentQuestion,
    rightDoneQuestions:state.quiz.rightDoneQuestions,
  }
}
export default connect(mapStateToProps, { startQuiz, setAnswer,changeQuestion,endQuiz,reset,setRightDoneQuestions})(Quiz)