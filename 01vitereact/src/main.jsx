import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <App />
      <p>MY name is Arun</p>
      <h1>One and Only Piece</h1>
    </>
  </StrictMode>
);
