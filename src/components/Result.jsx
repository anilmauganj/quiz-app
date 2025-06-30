const Result = ({ score, userAnswers, restartQuiz }) => {
  return (
    <>
      <h2>Quiz Completed!</h2>
      <h4>Your Score is: {score}</h4>
      <h3>🔍 Review Answers:</h3>
      <ul>
        {userAnswers.map((ans, i) => (
          <li key={i} style={{ marginBottom: '1rem' }}>
            <strong>Q{i + 1}.</strong> {ans.question}
            <br />
            <span
              style={{
                color: ans.selected === ans.correct ? 'green' : 'red',
              }}
            >
              {ans.selected === ans.correct ? '✅ Correct' : '❌ Wrong'}
            </span>
            <br />
            <small>
              Your Answer: {ans.options[ans.selected] || 'Not selected'} <br />
              Correct Answer: {ans.options[ans.correct]}
            </small>
          </li>
        ))}
      </ul>
      <button onClick={restartQuiz}>Start Again</button>
    </>
  );
};

export default Result;
