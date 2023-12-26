import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import css from './Section.module.css';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export const Section = ({
  options,
  good,
  neutral,
  bad,
  onLeaveFeedback,
  total,
  positiveFeedbackPercentage,
}) => {
  return (
    <section className={css.sectionFeedback}>
      <FeedbackOptions
        title="Please leave feedback"
        options={options}
        onLeaveFeedback={onLeaveFeedback}
      />
      {total() > 0 ? (
        <Statistics
          title="Statistics"
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </section>
  );
};
