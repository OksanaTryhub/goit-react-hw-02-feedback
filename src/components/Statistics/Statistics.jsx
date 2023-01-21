import PropTypes from 'prop-types';

import css from './Statistics.module.css';

const Statistics = ({ options, total, positivePercentage }) => (
  <div className={css.statistics__report}>
    <p> Good: {options.good}</p>
    <p> Neutral: {options.neutral}</p>
    <p> Bad: {options.bad}</p>
    <p> Total: {total}</p>
    <p> Positive feedback: {positivePercentage}%</p>
  </div>
);

export default Statistics;

Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
