import React, { Component } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';

import css from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickBtnCount = e => {
    const param = e.currentTarget.textContent;
    this.setState(prevState => {
      return {
        [param]: prevState[param] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const arr = Object.values(this.state);
    return arr.reduce((acc, elem) => acc + elem);
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0) {
      return 0;
    }
    return Math.floor((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.feedbackForm}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.clickBtnCount}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            options={this.state}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
