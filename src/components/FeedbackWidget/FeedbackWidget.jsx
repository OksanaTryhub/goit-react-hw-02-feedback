import React, { Component } from 'react';

import css from './FeedbackWidget.module.css';

class FeedbackWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = () => {
    console.log('click');
  };

  goodReviewsCount = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  render() {
    return (
      <div className={css.feedbackForm}>
        <h1 className={css.feedbackForm__title}>Please leave feedback</h1>
        <div className={css.feedbackForm__controls}>
          <button
            type="button"
            className={css.feedbackForm__btn}
            onClick={this.goodReviewsCount}
          >
            Good
          </button>
          <button
            type="button"
            className={css.feedbackForm__btn}
            onClick={this.handleClick}
          >
            Neutral
          </button>
          <button
            type="button"
            className={css.feedbackForm__btn}
            onClick={this.handleClick}
          >
            Bad
          </button>
        </div>

        <div className={css.feedbackForm__stats}>
          <h2 className={css.statistics__title}>Statistics</h2>
          <div className={css.statistics__report}>
            <p> Good: {this.state.good}</p>
            <p> Neutral: {this.state.neutral}</p>
            <p> Bad: {this.state.bad}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedbackWidget;
