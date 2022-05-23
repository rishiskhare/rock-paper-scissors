import "./style.css";
import Navbar from "./components/Navbar";
import Scorecard from "./components/Scorecard";
import Form from "./components/Form";
import Showdown from "./components/Showdown";
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

const App = () => {
  const [playerCharacter, setPlayerCharacter] = useState("");
  const navigate = useNavigate();

  const [score, setScore] = useState({
    playerScore: 0,
    computerScore: 0,
  });

  const handleChange = (event) => {
    setPlayerCharacter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/showdown");
  };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Scorecard score={score} />
        <Routes>
          <Route
            path="/"
            element={
              <Form handleChange={handleChange} handleSubmit={handleSubmit} />
            }
          ></Route>
          <Route
            path="/showdown"
            element={
              <Showdown
                playerCharacter={playerCharacter}
                score={score}
                setScore={setScore}
              />
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
