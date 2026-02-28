import { useState } from 'react'

// 10 general knowledge questions with 4 multiple choice options each
const QUESTIONS = [
  {
    question: 'Which New York City borough is home to Central Park?',
    options: ['Brooklyn', 'Queens', 'Manhattan', 'The Bronx'],
    correct: 2,
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correct: 1,
  },
  {
    question: 'How many sides does a hexagon have?',
    options: ['5', '6', '7', '8'],
    correct: 1,
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Michelangelo', 'Raphael', 'Caravaggio', 'Leonardo da Vinci'],
    correct: 3,
  },
  {
    question: 'What is the chemical symbol for water?',
    options: ['WA', 'H2O', 'HO2', 'OHH'],
    correct: 1,
  },
  {
    question: 'In what year did the first moon landing take place?',
    options: ['1965', '1967', '1969', '1972'],
    correct: 2,
  },
  {
    question: 'Which ocean is the largest on Earth?',
    options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
    correct: 3,
  },
  {
    question: 'What is the fastest land animal?',
    options: ['Lion', 'Cheetah', 'Greyhound', 'Pronghorn'],
    correct: 1,
  },
  {
    question: 'How many strings does a standard guitar have?',
    options: ['4', '5', '6', '7'],
    correct: 2,
  },
  {
    question: 'Which country is home to the Great Barrier Reef?',
    options: ['Brazil', 'Indonesia', 'Philippines', 'Australia'],
    correct: 3,
  },
]

function getResultMessage(score) {
  const total = QUESTIONS.length
  if (score === total) return "Perfect score! You're a trivia master!"
  if (score >= total * 0.8) return 'Great job! You really know your stuff!'
  if (score >= total * 0.5) return 'Good effort! Keep practicing and you will get there.'
  return 'Keep practicing — you will do better next time!'
}

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const question = QUESTIONS[currentQuestion]
  const isAnswered = selectedAnswer !== null
  const isLastQuestion = currentQuestion === QUESTIONS.length - 1

  function handleAnswer(index) {
    if (isAnswered) return
    setSelectedAnswer(index)
    if (index === question.correct) {
      setScore((s) => s + 1)
    }
  }

  function handleNext() {
    if (isLastQuestion) {
      setShowResult(true)
    } else {
      setCurrentQuestion((q) => q + 1)
      setSelectedAnswer(null)
    }
  }

  function handleRestart() {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowResult(false)
  }

  function getOptionClass(index) {
    if (!isAnswered) return 'option'
    if (index === question.correct) return 'option correct'
    if (index === selectedAnswer) return 'option wrong'
    return 'option'
  }

  if (showResult) {
    return (
      <div className="container">
        <div className="card result-card">
          <div className="result-emoji">
            {score === QUESTIONS.length ? '🏆' : score >= QUESTIONS.length * 0.8 ? '🎉' : '📚'}
          </div>
          <h1>Quiz Complete!</h1>
          <p className="score-display">
            You got <span className="score-number">{score}</span> out of {QUESTIONS.length}
          </p>
          <p className="result-message">{getResultMessage(score)}</p>
          <button className="btn-primary" onClick={handleRestart}>
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="card">
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill"
            style={{ width: `${((currentQuestion) / QUESTIONS.length) * 100}%` }}
          />
        </div>

        <p className="progress-label">
          Question {currentQuestion + 1} of {QUESTIONS.length}
        </p>

        <h2 className="question-text">{question.question}</h2>

        <div className="options">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={getOptionClass(index)}
              onClick={() => handleAnswer(index)}
              disabled={isAnswered}
            >
              <span className="option-letter">
                {String.fromCharCode(65 + index)}
              </span>
              {option}
            </button>
          ))}
        </div>

        {isAnswered && (
          <div className="feedback">
            {selectedAnswer === question.correct ? (
              <p className="feedback-correct">Correct!</p>
            ) : (
              <p className="feedback-wrong">
                Not quite. The correct answer is:{' '}
                <strong>{question.options[question.correct]}</strong>
              </p>
            )}
            <button className="btn-primary" onClick={handleNext}>
              {isLastQuestion ? 'See Results' : 'Next Question'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
