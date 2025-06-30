const Question = ({
  index,
  question,
  total,
  selectedOption,
  handleOptionChange,
  handleAnswer,
}) => {
  return (
    <>
      <h1>Quiz App</h1>
      <h3>
        Q{index + 1} of {total} - {question.question}
      </h3>
      <ul>
        {question.options.map((opt, i) => (
          <li key={i}>
            <label>
              <input
                type="radio"
                name="option"
                value={i}
                checked={selectedOption === i}
                onChange={handleOptionChange}
              />
              {opt}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleAnswer} disabled={selectedOption === null}>
        Submit
      </button>
    </>
  );
};

export default Question;
