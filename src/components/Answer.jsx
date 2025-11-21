const Answer = ({ letter, text, isCorrect, onAnswerClick, selectedAnswer }) => {
    const handleClick = () => {
        if (selectedAnswer === null) {
            onAnswerClick(text, isCorrect);
        }
    };

    const getClassName = () => {
        let className = "answer";
        if (selectedAnswer !== null) {
            className += " disabled-answer";
            if (isCorrect) {
                className += " correct-answer";
            } else if (selectedAnswer === text) {
                className += " wrong-answer";
            }
        }
        return className;
    };

    return (
        <div className={getClassName()} onClick={handleClick}>
            <div className="answer-letter">{letter}</div>
            <div className="answer-text">
                {text}
            </div>
        </div>
    );
}
export default Answer;