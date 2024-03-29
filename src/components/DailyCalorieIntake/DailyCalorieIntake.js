import React from 'react';

import s from './DailyCalorieIntake.module.css'

export const DailyCalorieIntake = ({ result }) => {
  return (
    <div className={s.container}>
        
      <h2 className={s.title}>Your recommended daily calorie intake is</h2>
      <div className={s.textKcal}>
        <h3  className={s.textKcal_first}>
          {result}
          <span  className={s.textKcal_second}>Kcal</span>
        </h3>
      </div>
      <div>
        <h4 className={s.recomText}>Foods you should not eat</h4>
        <ol className={s.list}>
          <li className={s.list_item}>Flour products</li>
          <li className={s.list_item}>Milk </li>
          <li className={s.list_item}>Red meat</li>
          <li className={s.list_item}>Smoked meats </li>
        </ol>
      </div>
      <button className={s.button} type="submit">Start losing weight</button>
    </div>
  );
};
