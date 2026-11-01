# React JS — Complete Learning & Interview Preparation

A structured React.js learning repository containing practical examples, hands-on projects, concept explanations, and interview preparation materials.

**Goal:** Build a strong understanding of React.js, develop real-world frontend applications, and prepare for entry-level React Developer and Frontend Developer interviews.

---

## Table of Contents

1. [Introduction to React](#1-introduction-to-react)
2. [React Fundamentals](#2-react-fundamentals)
3. [Components and Props](#3-components-and-props)
4. [State Management](#4-state-management)
5. [Events and Forms](#5-events-and-forms)
6. [React Hooks](#6-react-hooks)
7. [API Integration](#7-api-integration)
8. [React Router](#8-react-router)
9. [Context API](#9-context-api)
10. [Projects and Practical Learning](#10-projects-and-practical-learning)
11. [React Interview Questions](#11-react-interview-questions)
12. [Coding Interview Practice](#12-coding-interview-practice)

---

## 1. Introduction to React

### What is React?

React is a JavaScript library used to build interactive and reusable user interfaces.

It is commonly used for developing single-page applications (SPAs).

### Why React?

- Component-based architecture
- Reusable UI components
- Declarative UI development
- Efficient UI updates
- One-way data flow
- Large ecosystem and community

### Important Concepts

- Library vs Framework
- SPA (Single Page Application)
- Virtual DOM
- Declarative Programming
- Component-Based Architecture
- React Rendering

**Interview Answer:**

React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently manage application updates using state and props.

---

## 2. React Fundamentals

### JSX

JSX stands for JavaScript XML. It allows developers to write HTML-like syntax inside JavaScript.

```jsx
function App() {
  return <h1>Hello React!</h1>;
}

export default App;
```

### Rendering

React renders components into the DOM using the React DOM library.

### Important Topics

- JSX expressions
- JavaScript inside JSX
- Conditional rendering
- Lists and keys
- Fragment
- StrictMode
- Component rendering

### Interview Question

**What is JSX?**

JSX is a syntax extension for JavaScript that allows us to write HTML-like structures inside JavaScript code. React transforms JSX into JavaScript instructions.

---

## 3. Components and Props

### Components

Components are reusable and independent pieces of a user interface.

```jsx
function Welcome() {
  return <h1>Welcome to React</h1>;
}

export default Welcome;
```

### Props

Props are used to pass data from a parent component to a child component.

```jsx
function User({ name }) {
  return <h2>Hello, {name}</h2>;
}

function App() {
  return <User name="Suraj" />;
}
```

### Important Topics

- Functional Components
- Component Reusability
- Props
- Props Destructuring
- Parent-to-Child Communication
- Component Composition
- Props vs State

**Interview Answer:**

Props are read-only inputs passed from parent components to child components. They help make components reusable and dynamic.

---

## 4. State Management

### What is State?

State is data managed inside a component. When state changes, React can re-render the component to reflect the updated data.

### useState Hook

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;
```

### Important Topics

- State Initialization
- State Updates
- Previous State
- Functional State Updates
- Updating Objects
- Updating Arrays
- State vs Props

**Interview Answer:**

useState is a React Hook that allows functional components to manage state. It returns the current state value and a setter function to update it.

---

## 5. Events and Forms

### Event Handling

React uses event handlers to respond to user interactions.

```jsx
function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

### Form Handling

```jsx
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Important Topics

- onClick
- onChange
- onSubmit
- Controlled Components
- Uncontrolled Components
- Form Validation
- Two-way Data Binding Concept

---

## 6. React Hooks

Hooks allow functional components to use React features such as state, context, and effects.

### Important Hooks

| Hook | Purpose |
|---|---|
| useState | Manage component state |
| useEffect | Synchronize with external systems |
| useContext | Access shared context |
| useRef | Reference DOM elements or retain values |
| useMemo | Cache calculated values |
| useCallback | Cache function definitions |
| useReducer | Manage complex state transitions |

### useEffect

```jsx
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component synchronized");
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

### Important Topics

- Hook Rules
- Effect Dependencies
- Cleanup Functions
- Mounting, Updating and Unmounting
- Dependency Array
- Side Effects

**Interview Answer:**

useEffect is a React Hook used to synchronize a component with external systems, such as APIs, subscriptions, and browser APIs. It can also return a cleanup function.

---

## 7. API Integration

API integration allows React applications to communicate with backend services.

### Fetch API Example

```jsx
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

### Axios

Axios is a promise-based HTTP client used to make HTTP requests.

### Important Topics

- REST APIs
- GET, POST, PUT, PATCH, DELETE
- Fetch API
- Axios
- async/await
- Loading States
- Error Handling
- useEffect with API Calls
- JSON Data

---

## 8. React Router

React Router is used to handle navigation between different views in a React application.

### Important Topics

- BrowserRouter
- Routes
- Route
- Link
- NavLink
- useNavigate
- useParams
- Nested Routes
- Dynamic Routing
- Protected Routes
- Outlet

### Example

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

**Interview Answer:**

React Router is a routing library that allows React applications to navigate between different pages or views without requiring a full browser page reload.

---

## 9. Context API

Context API allows data to be shared across components without passing props manually through every intermediate component.

### Example

```jsx
import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function Home() {
  const theme = useContext(ThemeContext);

  return <h1>Current Theme: {theme}</h1>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;
```

### Important Topics

- createContext()
- Context.Provider
- useContext()
- Context Consumer
- Provider Wrapper Pattern
- Prop Drilling
- Context vs Props

**Interview Answer:**

Context API provides a way to share data across multiple components without passing props through every level of the component tree.

---

## 10. Projects and Practical Learning

This repository contains hands-on exercises and projects organized by topic.

| Folder | Learning Area |
|---|---|
| 01-folder | Project and folder fundamentals |
| 02-components | Components |
| 03-props | Props |
| 04-cards-project | Card UI project |
| 05-css | CSS styling |
| 06-tailwind | Tailwind CSS |
| 07-ui-project | UI development |
| 08-functions | JavaScript functions |
| 09-useState | useState |
| 10-useState-advance | Advanced state practice |
| 11-form-handling | Form handling |
| 12-two-way-binding | Input and state binding |
| 13-notes-app | Notes application |
| 14-local-storage | Browser localStorage |
| 15-api-call | API integration |
| 16-useEffect | useEffect |
| 17-gallery-project | Gallery application |
| 18-react-router-dom | React Router |
| 19-router-advance | Advanced routing |
| 21-context-api | Context API |

---

## 11. React Interview Questions

### Beginner Level

**Q1. What is React?**

React is a JavaScript library for building user interfaces using reusable components.

**Q2. What is a component?**

A component is a reusable piece of UI that can contain its own logic and presentation.

**Q3. What are props?**

Props are read-only data passed from a parent component to a child component.

**Q4. What is state?**

State is data managed by a component that can change over time.

**Q5. What is JSX?**

JSX is a JavaScript syntax extension that allows HTML-like syntax inside JavaScript.

### Intermediate Level

**Q6. What is the Virtual DOM?**

The Virtual DOM is a lightweight representation of the UI that React uses to calculate and apply necessary updates to the actual DOM.

**Q7. What is the difference between props and state?**

Props are passed from parent components, whereas state is managed by a component.

**Q8. What is useEffect?**

useEffect is used to synchronize a component with external systems.

**Q9. What is prop drilling?**

Prop drilling means passing data through multiple component levels to reach a deeply nested child.

**Q10. What is Context API?**

Context API allows components to access shared data without manually passing props through every level.

### Advanced Level

**Q11. What is React reconciliation?**

Reconciliation is the process React uses to compare previous and next UI descriptions and determine the updates needed.

**Q12. Why are keys important in React lists?**

Keys help React identify list items across renders and correctly manage their identity.

**Q13. What is the difference between useMemo and useCallback?**

useMemo caches a calculated value, while useCallback caches a function definition.

**Q14. What is a controlled component?**

A controlled component is a form element whose value is managed by React state.

**Q15. What is lazy loading?**

Lazy loading allows parts of an application to be loaded when needed instead of loading everything upfront.

---

## 12. Coding Interview Practice

Practice these problems to improve React coding skills:

1. Build a Counter App.
2. Create a Password Generator.
3. Build a Todo List.
4. Create a Notes Application.
5. Build a Search Filter.
6. Fetch and display API data.
7. Create a Gallery Application.
8. Implement Dark and Light Theme.
9. Build a Login Form with Validation.
10. Create a React Router-based multi-page application.

---

## Recommended Learning Strategy

For every concept, follow this process:

1. Understand the concept in simple language.
2. Study the syntax.
3. Understand the code line by line.
4. Write the code independently.
5. Build a small practical example.
6. Prepare a short English interview answer.
7. Practice explaining the concept without looking at notes.

## Final Goal

By completing this repository, learners should be able to:

- Understand React fundamentals.
- Build reusable components.
- Manage state and props.
- Work with React Hooks.
- Integrate REST APIs.
- Implement application routing.
- Share data using Context API.
- Build practical frontend projects.
- Explain React concepts confidently in technical interviews.

**Learn → Understand → Practice → Build → Explain → Crack the Interview.**

---

## Copyright & License

Copyright © 2026 Suraj Khan. All Rights Reserved.

This repository contains my personal React.js learning journey, practice code, and projects.

You may view this repository for learning and educational reference. You may not redistribute, republish, or use substantial portions of this work commercially without prior written permission from the author.

**Author:** Suraj Khan  
**GitHub:** [@surajkhan123](https://github.com/surajkhan123)

