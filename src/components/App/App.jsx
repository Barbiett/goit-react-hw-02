import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import { useState } from "react";

// import useEffect from "react";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  function onReset() {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
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
    <>
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
    </>
  );
}
