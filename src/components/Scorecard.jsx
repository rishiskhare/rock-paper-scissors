import React from "react-dom";

const Scorecard = ({ score }) => {
  return (
    <div className="scorecard--container">
      <div className="scorecard--player__container">
        <span className="scorecard--player__name">[you]</span>
        <h1 className="scorecard--player__score">{score.playerScore}</h1>
      </div>

      <h1 className="scorecard--separator">:</h1>
      <div className="scorecard--computer__container">
        <h1 className="scorecard--computer__score">{score.computerScore}</h1>
        <span className="scorecard--computer__name">[computer]</span>
      </div>
    </div>
  );
};

export default Scorecard;
