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
        let newArray = [];
        for (let i = 0; i < todos.length; i++) {
            newArray.push(todos[i]);
        }
        newArray.push({
            title: "Eat food",
            description: "eat food properly",
            done: true,
        });
    }

    return (
        <div>
            <input id="title" type="text" placeholder="Title"></input>
            <input id="description" type="text" placeholder="Description"></input>
            <br />
            <button onClick={addTodo}>Add Todo</button>
            <br />
        <Todo title={"Sujeet"} description={"Sujeet Oraon"} done={false} />
        </div>
    );
}

function Todo(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
            <h1>{props.done ? "Task is done" : "Task is not done"}</h1>
        </div>
    )
}