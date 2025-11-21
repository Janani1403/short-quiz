const Home = ({ onStartQuiz }) => {
    return (
        <div className="quiz">
            <div className="home-container">
                <h1 className="home-title">React Quiz</h1>
                <p className="home-description">Test your React knowledge</p>
                <p className="home-info">
                    Challenge yourself with 10 carefully crafted questions covering React fundamentals, 
                    hooks, components, and best practices. Perfect for beginners and intermediate developers 
                    looking to sharpen their skills.
                </p>
                <div className="next-button" onClick={onStartQuiz}>
                    Start Quiz
                </div>
            </div>
        </div>
    );
}

export default Home;
