import React from "react";

const Form = ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form--radio__container">
        <div className="form--radio__item">
          <input
            type="radio"
            id="rock"
            name="character"
            value="rock"
            onChange={handleChange}
          />
          <label htmlFor="rock">Rock</label>
        </div>
        <div className="form--radio__item">
          <input
            type="radio"
            id="paper"
            name="character"
            value="paper"
            onChange={handleChange}
          />
          <label htmlFor="paper">Paper</label>
        </div>
        <div className="form--radio__item">
          <input
            type="radio"
            id="scissors"
            name="character"
            value="scissors"
            onChange={handleChange}
          />
          <label htmlFor="scissors">Scissors</label>
        </div>
        <div className="form--radio__item">
          <input
            type="radio"
            id="lizard"
            name="character"
            value="lizard"
            onChange={handleChange}
          />
          <label htmlFor="lizard">Lizard</label>
        </div>
        <div className="form--radio__item">
          <input
            type="radio"
            id="spock"
            name="character"
            value="spock"
            onChange={handleChange}
          />
          <label htmlFor="spock">Spock</label>
        </div>
      </div>
      <button className="form--submit">Play</button>
    </form>
  );
};

export default Form;
