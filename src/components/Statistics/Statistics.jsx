import css from './Statistics.module.css';

export const Statistics = ({
  title,
  total,
  positiveFeedbackPercentage,
  good,
  neutral,
  bad,
}) => {
  return (
    <div className={css.statisticsContainer}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.list}>
        <li>
          <p className={css.feedbackText}>
            Good:
            <span className={css.feedbackSpan}>{good}</span>
          </p>
        </li>
        <li>
          <p className={css.feedbackText}>
            Neutral:
            <span className={css.feedbackSpan}>{neutral}</span>
          </p>
        </li>
        <li>
          <p className={css.feedbackText}>
            Bad:
            <span className={css.feedbackSpan}>{bad}</span>
          </p>
        </li>
      </ul>
      <ul className={css.feedbackResultList}>
        <li>
          <p className={css.feedbackResultText}>
            Total:
            <span className={css.feedbackResultSpan}>{total()}</span>
          </p>
        </li>
        <li>
          <p className={css.feedbackResultText}>
            Positive feedback:
            <span className={css.feedbackResultSpan}>
              {positiveFeedbackPercentage()}%
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
};
