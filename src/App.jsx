import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");

  const addTodo = () => {
    const text = input.trim();

    if (!text) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: text,
        completed: false
      }
    ]);

    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="container">
      <h1>My Todo List</h1>

      <ul className="list-container">
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />

            <span className={todo.completed ? "completed" : ""}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>

      <input
        id="todo-input"
        type="text"
        placeholder="Add a new todo"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default App;