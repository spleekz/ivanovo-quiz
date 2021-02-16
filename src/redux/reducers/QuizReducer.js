let START_QUIZ = 'START_QUIZ',
  END_QUIZ = 'END_QUIZ',
  SET_ANSWER = 'SET_ANSWER',
  CHANGE_QUESTION = 'CHANGE_QUESTION',
  RESET = 'RESET',
  SET_RIGHT_DONE_QUESTIONS = 'SET_RIGHT_DONE_QUESTIONS'

let initialState = {
  questions: [
    {
      name: 'К какому году относится первое упоминание об Иванове?',
      id: 1,
      answers: [
        { name: '1608', isRight: true, id: 1, isSelected: undefined },
        { name: '1871', isRight: false, id: 2, isSelected: undefined },
        { name: '1927', isRight: false, id: 3, isSelected: undefined },
        { name: '1590', isRight: false, id: 4, isSelected: undefined },
      ],
    },

    {
      name: 'Из скольких районов состоит город Иваново?',
      id: 2,
      answers: [
        { name: '3', isRight: false, id: 1, isSelected: undefined },
        { name: '4', isRight: true, id: 2, isSelected: undefined },
        { name: '5', isRight: false, id: 3, isSelected: undefined },
        { name: '6', isRight: false, id: 4, isSelected: undefined },
      ],
    },

    {
      name: 'Кто является губернатором Ивановской области на 2021 год?',
      id: 3,
      answers: [
        { name: 'Михаил Мень', isRight: false, id: 1, isSelected: undefined },
        { name: 'Станислав Воскресенский', isRight: true, id: 2, isSelected: undefined },
        { name: 'Владислав Тихомиров', isRight: false, id: 3, isSelected: undefined },
        { name: 'Павел Коньков', isRight: false, id: 4, isSelected: undefined },
      ],
    },

    {
      name: 'Сколько человек проживает в городе Иваново?',
      id: 4,
      answers: [
        { name: '987 тыс.человек', isRight: false, id: 1, isSelected: undefined },
        { name: '404 тыс.человек', isRight: true, id: 2, isSelected: undefined },
        { name: '380 тыс.человек', isRight: false, id: 3, isSelected: undefined },
        { name: '202 тыс.человек', isRight: false, id: 4, isSelected: undefined },
      ],
    },

    {
      name: 'Какая известная музыкальная группа была основана в Иванове?',
      id: 5,
      answers: [
        { name: 'Nautilus Pompilius', isRight: false, id: 1, isSelected: undefined },
        { name: 'Мумий Тролль', isRight: false, id: 2, isSelected: undefined },
        { name: 'Градусы', isRight: false, id: 3, isSelected: undefined },
        { name: 'Дискотека Авария', isRight: true, id: 4, isSelected: undefined },
      ],
    },

    {
      name: 'Как в простонародье называют город Иваново?',
      id: 6,
      answers: [
        { name: '"Оружейная столица России"', isRight: false, id: 1, isSelected: undefined },
        { name: '"Город Студентов"', isRight: true, id: 2, isSelected: undefined },
        { name: '"Белый Город"', isRight: false, id: 3, isSelected: undefined },
        { name: '"Третий Рим"', isRight: false, id: 4, isSelected: undefined },
      ],
    },

    {
      name: 'Сколько музеев находится в Иванове?',
      id: 7,
      answers: [
        { name: '19', isRight: true, id: 1, isSelected: undefined },
        { name: '26', isRight: false, id: 2, isSelected: undefined },
        { name: '15', isRight: false, id: 3, isSelected: undefined },
        { name: '23', isRight: false, id: 4, isSelected: undefined },
      ],
    },

    {
      name: 'Под каким названием проходит ежегодный Ивановский флешмоб?',
      id: 8,
      answers: [
        { name: '"Свободная невеста"', isRight: false, id: 1, isSelected: undefined },
        { name: '"Настоящая невеста"', isRight: false, id: 2, isSelected: undefined },
        { name: '"Сбежавшая невеста"', isRight: true, id: 3, isSelected: undefined },
        { name: '"Достойная невеста"', isRight: false, id: 4, isSelected: undefined },
      ],
    },

    {
      name: 'В каком году был утвержден герб Иваново?',
      id: 9,
      answers: [
        { name: '1977', isRight: false, id: 1, isSelected: undefined },
        { name: '1996', isRight: true, id: 2, isSelected: undefined },
        { name: '1989', isRight: false, id: 3, isSelected: undefined },
        { name: '1992', isRight: false, id: 4, isSelected: undefined },
      ],
    },

    {
      name: 'Какое название имеет ивановский дом необычной формы?',
      id: 10,
      answers: [
        { name: 'Дом-волна', isRight: false, id: 1, isSelected: undefined },
        { name: 'Дом-пузырь', isRight: false, id: 2, isSelected: undefined },
        { name: 'Дом-корабль', isRight: true, id: 3, isSelected: undefined },
        { name: 'Дом-пушка', isRight: false, id: 4, isSelected: undefined },
      ],
    },

    {
      name: 'Кто из этих людей НЕ был ивановцем?',
      id: 11,
      answers: [
        { name: 'Аркадий Северный', isRight: false, id: 1, isSelected: undefined },
        { name: 'Яков Гарелин', isRight: false, id: 2, isSelected: undefined },
        { name: 'Николай Бугров', isRight: true, id: 3, isSelected: undefined },
        { name: 'Дмитрий Бурылин', isRight: false, id: 4, isSelected: undefined },
      ],
    },

    {
      name: 'Какое здание является старейшим в городе?',
      id: 12,
      answers: [
        { name: 'Щудровская палатка', isRight: true, id: 1, isSelected: undefined },
        { name: 'Особняк Гандурина', isRight: false, id: 2, isSelected: undefined },
        { name: 'Дом Бубновых', isRight: false, id: 3, isSelected: undefined },
        { name: 'Усадьба Дюрингера', isRight: false, id: 4, isSelected: undefined },
      ],
    },

    {
      name: 'Какое водохранилище снабжает 80% населения Иванова питьевой водой?',
      id: 13,
      answers: [
        { name: 'Горьковское', isRight: false, id: 1, isSelected: undefined },
        { name: 'Куйбышевское', isRight: false, id: 2, isSelected: undefined },
        { name: 'Рыбинское', isRight: false, id: 3, isSelected: undefined },
        { name: 'Уводьское', isRight: true, id: 4, isSelected: undefined },
      ],
    },

    {
      name: 'Какой детский лагерь НЕ расположен на территории Ивановской области?',
      id: 14,
      answers: [
        { name: 'Дружба', isRight: true, id: 1, isSelected: undefined },
        { name: 'Строитель', isRight: false, id: 2, isSelected: undefined },
        { name: 'Объединенное Королевство', isRight: false, id: 3, isSelected: undefined },
        { name: 'Березовая роща', isRight: false, id: 4, isSelected: undefined },
      ],
    },

    {
      name: 'В каком году в Иванове был открыт первый ВУЗ?',
      id: 15,
      answers: [
        { name: '1893', isRight: false, id: 1, isSelected: undefined },
        { name: '1918', isRight: true, id: 2, isSelected: undefined },
        { name: '1757', isRight: false, id: 3, isSelected: undefined },
        { name: '1931', isRight: false, id: 4, isSelected: undefined },
      ],
    },
  ],
  rightDoneQuestions: 0,
  quizInProgress: false,
  currentQuestion: 1,
  get totalQuestionsCount() {
    return this.questions.length;
  },
}


const QuizReducer = (state = initialState, action) => {
  if (action.type === START_QUIZ) {
    return {
      ...state,
      quizInProgress: true
    }
  }
  if (action.type === END_QUIZ) {
    return {
      ...state,
      quizInProgress: false
    }
  }
  if (action.type === SET_ANSWER) {
    return {
      ...state,
      questions: state.questions.map((question) => {
        if (question.id === action.questionNumber) {
          return {
            ...question,
            answers: question.answers.map((answer) => {
              if ((answer.id === action.selectedAnswer)) {
                return { ...answer, isSelected: true }
              }
              return { ...answer }
            }),
          }
        }
        return { ...question }
      }),
    }
  }
  if (action.type === CHANGE_QUESTION) {
    return {
      ...state,
      currentQuestion: state.currentQuestion + 1
    }
  }
  if (action.type === RESET) {
    return {
      ...state,
      questions: state.questions.map((question) => {
        return {
          ...question,
          answers: question.answers.map((answer) => {
            return {
              ...answer,
              isSelected: false
            }
          })
        }
      }),
      currentQuestion: 1,
      rightDoneQuestions: 0
    }
  }
  if (action.type === SET_RIGHT_DONE_QUESTIONS) {
    return {
      ...state,
      rightDoneQuestions: state.questions.reduce((acc, question) => {
        if (question.id === action.questionNumber) {
          question.answers.forEach((answer) => {
            if (answer.isSelected && answer.isRight) {
              acc++;
            }
          })
        }
        return acc;
      }, state.rightDoneQuestions)
    }
  }
  return state;
}

export const startQuiz = () => {
  return {
    type: START_QUIZ
  }
};
export const endQuiz = () => {
  return {
    type: END_QUIZ
  }
}
export const setAnswer = (questionNumber, selectedAnswer) => {
  return {
    type: SET_ANSWER,
    questionNumber,
    selectedAnswer
  }
}
export const changeQuestion = () => {
  return {
    type: CHANGE_QUESTION,
  }
}
export const reset = () => {
  return {
    type: RESET
  }
}
export const setRightDoneQuestions = (questionNumber) => {
  return {
    type: SET_RIGHT_DONE_QUESTIONS,
    questionNumber
  }
}
export default QuizReducer;