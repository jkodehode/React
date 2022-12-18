import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <h1>Hei</h1>
      <Footer />
    </div>
  );
}

export default App;
