import React from "react";
import "./App.css";
// import "./Sidebar";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Container from "./Components/Container";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Sidebar />
      <Container />
    </div>
  );
}

export default App;
