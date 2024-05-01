import css from "./Options.module.css";
export default function Options({ updateFeedback, totalFeedback, onReset }) {
  const handleClick = (type) => {
    updateFeedback(type);
  };

  return (
    <div className={css.container}>
      <button
        className={css.button}
        onClick={() => handleClick("good")}
        type="button"
      >
        Good
      </button>
      <button
        className={css.button}
        onClick={() => handleClick("neutral")}
        type="button"
      >
        Neutral
      </button>
      <button
        className={css.button}
        onClick={() => handleClick("bad")}
        type="button"
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.button} onClick={onReset} type="button">
          Reset
        </button>
      )}
    </div>
  );
}
