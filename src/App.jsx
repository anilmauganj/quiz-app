import { useState } from 'react';
import styles from './App.module.css';
import questions from './data/questions';
import Question from './components/Question';
import Result from './components/Result';

function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleOptionChange = (e) => {
    setSelectedOption(Number(e.target.value));
  };

  const handleAnswer = () => {
    const isCorrect = selectedOption === questions[index].answer;
    if (isCorrect) {
      setScore(score + 1);
    }

    //Save user answers
    setUserAnswers([
      ...userAnswers,
      {
        question: questions[index].question,
        options: questions[index].options,
        selected: selectedOption,
        correct: questions[index].answer,
      },
    ]);

    const nextIndex = index + 1;
    if (nextIndex < questions.length) {
      setIndex(nextIndex);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setIndex(0);
    setScore(0);
    setIsFinished(false);
    setSelectedOption(null);
    setUserAnswers([]);
  };

  return (
    <div className={styles.container}>
      {isFinished ? (
        <Result
          score={score}
          userAnswers={userAnswers}
          restartQuiz={restartQuiz}
        />
      ) : (
        <Question
          index={index}
          question={questions[index]}
          total={questions.length}
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default App;
