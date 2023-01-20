import DisplayNotification from 'components/Notification/Notification';

import css from './Statistics.module.css';

const Statistics = ({ options, total, positivePercentage }) => (
  <div className={css.feedbackForm__stats}>
    {total === 0 ? (
      <DisplayNotification />
    ) : (
      <div className={css.statistics__report}>
        <p> Good: {options.good}</p>
        <p> Neutral: {options.neutral}</p>
        <p> Bad: {options.bad}</p>
        <p> Total: {total} </p>
        <p> Positive feedback: {positivePercentage}% </p>
      </div>
    )}
  </div>
);

export default Statistics;
