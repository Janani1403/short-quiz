const data = [
  {
    question: "What is the correct way to create a functional component in React?",
    incorrectAnswers: [
      "class MyComponent extends React.Component {}",
      "React.createComponent('MyComponent')",
      "new React.Component()"
    ],
    correctAnswer: "function MyComponent() { return <div>Hello</div>; }"
  },
  {
    question: "Which hook is used to manage state in a functional component?",
    incorrectAnswers: [
      "useEffect",
      "useContext",
      "useReducer"
    ],
    correctAnswer: "useState"
  },
  {
    question: "What does JSX stand for?",
    incorrectAnswers: [
      "JavaScript Syntax",
      "Java Server Extension",
      "JavaScript Extreme"
    ],
    correctAnswer: "JavaScript XML"
  },
  {
    question: "Which method is called immediately after a component is mounted?",
    incorrectAnswers: [
      "componentWillMount",
      "componentDidUpdate",
      "shouldComponentUpdate"
    ],
    correctAnswer: "componentDidMount"
  },
  {
    question: "What is the purpose of the useEffect hook?",
    incorrectAnswers: [
      "To create state variables",
      "To manage context",
      "To create refs"
    ],
    correctAnswer: "To perform side effects in functional components"
  },
  {
    question: "How do you pass data from a parent component to a child component?",
    incorrectAnswers: [
      "Using state",
      "Using context only",
      "Using refs"
    ],
    correctAnswer: "Using props"
  },
  {
    question: "What is the virtual DOM in React?",
    incorrectAnswers: [
      "A copy of the browser's DOM stored in memory",
      "A new browser API",
      "A database for React applications"
    ],
    correctAnswer: "A lightweight copy of the actual DOM used for efficient updates"
  },
  {
    question: "Which hook allows you to access context in a functional component?",
    incorrectAnswers: [
      "useState",
      "useEffect",
      "useMemo"
    ],
    correctAnswer: "useContext"
  },
  {
    question: "What is the correct syntax to conditionally render a component?",
    incorrectAnswers: [
      "if (condition) <Component />",
      "<Component if={condition} />",
      "render(<Component />, condition)"
    ],
    correctAnswer: "{condition && <Component />}"
  },
  {
    question: "What is the purpose of keys in React lists?",
    incorrectAnswers: [
      "To style list items",
      "To add security to components",
      "To pass props to list items"
    ],
    correctAnswer: "To help React identify which items have changed, added, or removed"
  }
];

export default data;
