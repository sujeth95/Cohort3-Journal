import { useState } from "react";
import "./App.css";

export default function App() {
    
    const [count, setCount] = useState(0);

    function onClickHandler() {
        setCount(count + 1);
    }
    
    return (
        <div>
        <Button onClickHandler={onClickHandler}></Button>
    </div>
);
}

function Button(props){
    return <button onClick={props.onClickHandler}>Counter {count}</button>;
}