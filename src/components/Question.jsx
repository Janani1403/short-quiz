import { useMemo } from "react";
import Answer from "./Answer.jsx";

const Question = ({ question, onAnswerClick, selectedAnswer }) => {
    const shuffledAnswers = useMemo(() => {
        const allAnswers = [
            { text: question.correctAnswer, isCorrect: true },
            ...question.incorrectAnswers.map(answer => ({ text: answer, isCorrect: false }))
        ];
        // Shuffle answers to randomize their positions
        return [...allAnswers].sort(() => Math.random() - 0.5);
    }, [question]);

    const letters = ['A', 'B', 'C', 'D'];

    return (
        <div>
            <div className="question">
                {question.question}
            </div>
            <div className="answers">
                {shuffledAnswers.map((answer, index) => (
                    <Answer 
                        key={index}
                        letter={letters[index]}
                        text={answer.text}
                        isCorrect={answer.isCorrect}
                        onAnswerClick={onAnswerClick}
                        selectedAnswer={selectedAnswer}
                    />
                ))}
            </div>
        </div>
    );
}
export default Question;