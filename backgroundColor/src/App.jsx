// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import { useState } from "react";

function App() {
  const [color, setcolor] = useState("red");

  return (
    <>
      <div className="text-center text-blue-400">
        <h1>Background Color: {color}</h1>

        <button className="w-xl" onClick={addvalue}>
          Addvalue:{counter}
        </button>

        <button className="w-xl " onClick={removevalue}>
          RemoveValue:{counter}
        </button>
      </div>
    </>
  );
}
export default App;
