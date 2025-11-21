# React Quiz App

A beautiful, interactive quiz application built with React and Tailwind CSS to test your React knowledge.

## Features

- 🎯 **10 React Questions** - Covering fundamentals, hooks, components, and best practices
- 🎨 **Modern UI** - Clean design with gradient effects and smooth animations
- ✅ **Instant Feedback** - Correct answers highlighted in green, incorrect in red
- 📊 **Score Tracking** - Keep track of your progress throughout the quiz
- 🏆 **Results Screen** - Personalized feedback based on your performance
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🔄 **Restart Option** - Take the quiz multiple times to improve your score

## Tech Stack

- **React** - UI component library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - ES6+ features

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Janani1403/short-quiz.git
cd short-quiz
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Available Scripts

### `npm run dev`

Runs the app in development mode with Vite's fast hot module replacement (HMR).

### `npm run build`

Builds the app for production to the `dist` folder. The build is optimized for best performance.

### `npm run preview`

Previews the production build locally.

## Project Structure

```
short-quiz/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Answer.jsx      # Individual answer component
│   │   ├── Home.jsx         # Landing page
│   │   ├── Question.jsx     # Question display component
│   │   └── Quiz.jsx         # Main quiz logic component
│   ├── data.js              # Quiz questions data
│   ├── index.css            # Global styles with Tailwind
│   └── index.jsx            # App entry point
├── index.html               # HTML template
├── package.json
├── vite.config.js           # Vite configuration
└── tailwind.config.js       # Tailwind configuration
```

## Quiz Flow

1. **Home Page** - Welcome screen with quiz description
2. **Quiz Questions** - 10 multiple-choice questions with randomized answer order
3. **Answer Selection** - Click to select an answer (only once per question)
4. **Visual Feedback** - Immediate color-coded feedback on selection
5. **Results** - Final score with personalized message based on performance

## Scoring System

- **10/10** - Perfect score! You're a React expert! 🎉
- **8-9** - Excellent work! Strong grasp of React concepts
- **5-7** - Good job! Keep practicing React fundamentals
- **<5** - Keep learning! Review the concepts and try again

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is open source and available under the MIT License.

## Author

Janani1403

---

Happy learning! 🚀
