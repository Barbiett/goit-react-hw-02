export default function Options({ updateFeedback, totalFeedback, onReset }) {
  const handleClick = (type) => {
    updateFeedback(type);
  };

  return (
    <div>
      <button onClick={() => handleClick("good")}>Good</button>
      <button onClick={() => handleClick("neutral")}>Neutral</button>
      <button onClick={() => handleClick("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
}
