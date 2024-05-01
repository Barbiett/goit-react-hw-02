import css from "./Feedback.module.css";
export default function Feedback({
  feedback: { good, neutral, bad },
  totalFeedback,
  positiveFeedbackPercent,
}) {
  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>
          Good:<span className={css.itemspan}>{good}</span>
        </li>
        <li className={css.item}>
          Neutral:
          <span className={css.itemspan}>{neutral}</span>
        </li>
        <li className={css.item}>
          Bad:
          <span className={css.itemspan}>{bad}</span>
        </li>
        <li className={css.item}>
          Total:
          <span className={css.itemspan}>{totalFeedback}</span>
        </li>
        <li className={css.item}>
          Positive:
          <span className={css.itemspan}>{positiveFeedbackPercent}%</span>
        </li>
      </ul>
    </>
  );
}
