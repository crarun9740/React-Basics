import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(2);

  const addvalue = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    console.log({ counter });
  };

  const removevalue = () => {
    counter = counter - 1;
    setCounter(counter);
  };

  return (
    <>
      <h1>React Learning</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addvalue}>Add value:{counter}</button>
      <br />
      <button onClick={removevalue}>remove value:{counter}</button>
    </>
  );
}

export default App;
