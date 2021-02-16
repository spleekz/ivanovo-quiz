import React from 'react';
import './Description.css';

const Description = (props) => {
  return (
    <div className="description">
      <div className="description-text">
        В этом году городу Иваново испоняется <span className='jubilee'>150 лет!</span> Предлагаем Вам пройти викторину и проверить свои знания о городе
      </div>
      <button className='start-quiz' onClick={props.startQuiz} >Начать викторину</button>
    </div>
  )
};

export default Description;