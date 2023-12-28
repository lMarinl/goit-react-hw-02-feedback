import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.optionsContainer}>
      <ul className={css.optionsList}>
        {options.map(option => (
          <li key={option} className={css.optionsItem}>
            <button
              className={css.button}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
