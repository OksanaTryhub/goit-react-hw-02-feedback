import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.feedbackForm__controls}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          className={css.feedbackForm__btn}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
