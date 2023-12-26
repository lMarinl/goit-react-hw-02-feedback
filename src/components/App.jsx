import React, { Component } from 'react';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: null,
    neutral: null,
    bad: null,
  };

  handleLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];
    const totalFeedback = this.countTotalFeedback;
    const onLeaveFeedback = this.handleLeaveFeedback;
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage;
    return (
      <Section
        options={options}
        good={good}
        neutral={neutral}
        bad={bad}
        onLeaveFeedback={onLeaveFeedback}
        totalFeedback={totalFeedback}
        positiveFeedbackPercentage={positiveFeedbackPercentage}
        total={totalFeedback}
      />
    );
  }
}
