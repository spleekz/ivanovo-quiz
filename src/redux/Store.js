import { combineReducers, createStore } from "redux";
import QuizReducer from "./reducers/QuizReducer";

let reducers = combineReducers(
  {
    quiz: QuizReducer
  }
)

let store = createStore(reducers)
window.store = store

export default store;