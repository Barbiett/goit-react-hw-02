import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import { useState, useEffect } from "react";
import css from "./App.module.css";

export default function App() {
  const initFeedback =
    { good: 0, neutral: 0, bad: 0 } ||
    JSON.parse(localStorage.getItem(localStorageKey));

  const [feedback, setFeedback] = useState(initFeedback);
  const localStorageKey = "saved-feedback";
  useEffect(() => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(feedback));
  }, [feedback]);
  useEffect(() => {
    const savedFeedback = JSON.parse(
      window.localStorage.getItem(localStorageKey)
    );
    if (savedFeedback !== null) {
      setFeedback(savedFeedback);
    }
  }, []);

  function onReset() {
    const resetFeedback = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    setFeedback(resetFeedback);
    localStorage.setItem(localStorageKey, JSON.stringify(resetFeedback));
  }
  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercent = Math.round(
    (feedback.good / totalFeedback) * 100
  );

  return (
    <div className={css.container}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        onReset={onReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback < 1 ? (
        <Notification />
      ) : (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedbackPercent={positiveFeedbackPercent}
        />
      )}
    </div>
  );
}
