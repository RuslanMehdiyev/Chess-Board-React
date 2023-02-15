import React from "react";
import "./assets/style.css";
import ChessBoard from "./components/ChessBoard";

export default function App() {
  return (
    <div className="App">
      <h1>Chess Board</h1>
      <ChessBoard />
    </div>
  );
}
