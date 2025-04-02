import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "Arun chavan",
    age: "21",
  };

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwindcss
      </h1>
      <Card channel="Arun" username={"c r arun"} />
      <Card ptext="my name is arun chavan i am studying in BIET college davangere" />
    </>
  );
}

export default App;
