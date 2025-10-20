import { useState } from "react";
import "./App.css";

export default function App() {
    const [todos, setTodos] = useState([
        {
            title: "Go to gym",
            description: "Hit the gym regularly",
            done: false,
        },
    ]);

    function addTodo() {
        setTodos()
    }

    return (
        <div>
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
}