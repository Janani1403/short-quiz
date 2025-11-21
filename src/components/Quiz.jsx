import { useState } from "react";
import Question from "./Question.jsx";
import Home from "./Home.jsx";
import data from "../data.js";

const Quiz = () => {
    const [quizStarted, setQuizStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);

    const startQuiz = () => {
        setQuizStarted(true);
    };

    const handleAnswerClick = (answerText, isCorrect) => {
        if (selectedAnswer !== null) return; // Prevent multiple selections
        
        setSelectedAnswer(answerText);
        if (isCorrect) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < data.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedAnswer(null);
        } else {
            setShowResult(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setQuizStarted(false);
    };

    if (!quizStarted) {
        return <Home onStartQuiz={startQuiz} />;
    }

    if (showResult) {
        const getResultMessage = () => {
            if (score === data.length) {
                return "Perfect score! You're a React expert! 🎉";
            } else if (score >= 8) {
                return "Excellent work! You have a strong grasp of React concepts.";
            } else if (score >= 5) {
                return "Good job! Keep practicing to master React fundamentals.";
            } else {
                return "Keep learning! Review the concepts and try again to improve your score.";
            }
        };

        return (
            <div className="quiz">
                <div className="results">
                    <div className="congratulations">
                        Congratulations!
                    </div>
                    <div className="results-info">
                        You scored {score} out of {data.length}
                    </div>
                    <p className="results-message">
                        {getResultMessage()}
                    </p>
                    <div className="next-button" onClick={restartQuiz}>
                        Restart Quiz
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="quiz">
            <div className="score">
                Question {currentQuestion + 1}/{data.length}
            </div>
            <Question 
                question={data[currentQuestion]}
                onAnswerClick={handleAnswerClick}
                selectedAnswer={selectedAnswer}
            />
            {selectedAnswer !== null && (
                <div className="next-button" onClick={handleNextQuestion}>
                    {currentQuestion + 1 === data.length ? "Show Results" : "Next Question"}
                </div>
            )}
        </div>
    );
}
export default Quiz;