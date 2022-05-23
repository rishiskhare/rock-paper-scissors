import React, { useEffect, useState } from "react";
import rock from "../assets/images/rock.png";
import paper from "../assets/images/paper.png";
import scissors from "../assets/images/scissors.png";
import lizard from "../assets/images/lizard.png";
import spock from "../assets/images/spock.png";
import characters from "../charactersData";
import { Link } from "react-router-dom";

const Showdown = ({ playerCharacter, score, setScore }) => {
  // const messages = {
  //   "lizard-paper": "Lizard eats Paper",
  //   "lizard-rock": "Rock crushes Lizard",
  //   "lizard-scissors": "Scissors decapitates Lizard",
  //   "lizard-spock": "Lizard poisons Spock",

  //   "paper-rock": "Paper covers Rock",
  //   "paper-scissors": "Scissors cuts Paper",
  //   "paper-spock": "Paper disproves Spock",

  //   "rock-scissors": "Rock crushes Scissors",
  //   "rock-spock": "Spock vaporizes Rock",

  //   "scissors-spock": "Spock smashes Scissors",
  // };

  const [computerCharacter, setComputerCharacter] = useState("");
  const [winnerText, setWinnerText] = useState("");
  const generateMoveForComputer = () => {
    setComputerCharacter(
      characters[Math.floor(Math.random() * characters.length)]
    );
  };
  useEffect(() => {
    generateMoveForComputer();
  }, []);

  const getWinnerText = () => {
    if (playerCharacter === computerCharacter) {
      setScore({ ...score });
      setWinnerText(`${playerCharacter} ties ${computerCharacter}`);
    } else if (playerCharacter === "lizard") {
      if (computerCharacter === "paper") {
        setScore({ ...score, playerScore: score.playerScore + 1 });
        setWinnerText("Lizard eats Paper");
      } else if (computerCharacter === "spock") {
        setScore({ ...score, playerScore: score.playerScore + 1 });
        setWinnerText("Lizard poisons Spock");
      } else if (computerCharacter === "rock") {
        setScore({ ...score, computerScore: score.computerScore + 1 });
        setWinnerText("Rock crushes Lizard");
      } else if (computerCharacter === "scissors") {
        setScore({ ...score, computerScore: score.computerScore + 1 });
        setWinnerText("Scissors decapitates Lizard");
      }
    } else if (playerCharacter === "paper") {
      if (computerCharacter === "rock") {
        setScore({ ...score, playerScore: score.playerScore + 1 });
        setWinnerText("Paper covers Rock");
      } else if (computerCharacter === "spock") {
        setScore({ ...score, playerScore: score.playerScore + 1 });
        setWinnerText("Paper disproves Spock");
      } else if (computerCharacter === "scissors") {
        setScore({ ...score, computerScore: score.computerScore + 1 });
        setWinnerText("Scissors cuts Paper");
      } else if (computerCharacter === "lizard") {
        setScore({ ...score, computerScore: score.computerScore + 1 });
        setWinnerText("Lizard eats Paper");
      }
    } else if (playerCharacter === "rock") {
      if (computerCharacter === "scissors") {
        setScore({ ...score, playerScore: score.playerScore + 1 });
        setWinnerText("Rock crushes Scissors");
      } else if (computerCharacter === "lizard") {
        setScore({ ...score, playerScore: score.playerScore + 1 });
        setWinnerText("Rock crushes Lizard");
      } else if (computerCharacter === "paper") {
        setScore({ ...score, computerScore: score.computerScore + 1 });
        setWinnerText("Paper covers Rock");
      } else if (computerCharacter === "spock") {
        setScore({ ...score, computerScore: score.computerScore + 1 });
        setWinnerText("Spock vaporizes Rock");
      }
    } else if (playerCharacter === "scissors") {
      if (computerCharacter === "paper") {
        setScore({ ...score, playerScore: score.playerScore + 1 });
        setWinnerText("Scissors cuts Paper");
      } else if (computerCharacter === "lizard") {
        setScore({ ...score, playerScore: score.playerScore + 1 });
        setWinnerText("Scissors decapitates Lizard");
      } else if (computerCharacter === "rock") {
        setScore({ ...score, computerScore: score.computerScore + 1 });
        setWinnerText("Rock crushes Scissors");
      } else if (computerCharacter === "spock") {
        setScore({ ...score, computerScore: score.computerScore + 1 });
        setWinnerText("Spock smashes Scissors");
      }
    } else if (playerCharacter === "spock") {
      if (computerCharacter === "rock") {
        setScore({ ...score, playerScore: score.playerScore + 1 });
        setWinnerText("Spock vaporizes Rock");
      } else if (computerCharacter === "scissors") {
        setScore({ ...score, playerScore: score.playerScore + 1 });
        setWinnerText("Spock smashes Scissors");
      } else if (computerCharacter === "paper") {
        setScore({ ...score, computerScore: score.computerScore + 1 });
        setWinnerText("Paper disproves Spock");
      } else if (computerCharacter === "lizard") {
        setScore({ ...score, computerScore: score.computerScore + 1 });
        setWinnerText("Lizard poisons Spock");
      }
    }
  };

  useEffect(() => {
    getWinnerText();
  }, [computerCharacter]);

  const determineCharacter = (characterName) => {
    if (characterName === "rock") {
      return rock;
    }
    if (characterName === "paper") {
      return paper;
    }
    if (characterName === "scissors") {
      return scissors;
    }
    if (characterName === "lizard") {
      return lizard;
    }
    if (characterName === "spock") {
      return spock;
    }
  };

  return (
    <div className="showdown--container--button">
      <div className="showdown--container">
        <img
          className="showdown--img"
          src={determineCharacter(playerCharacter)}
          alt={playerCharacter}
        />
        <h1 className="showdown--text">{winnerText}</h1>
        <img
          className="showdown--img"
          src={determineCharacter(computerCharacter)}
          alt={computerCharacter}
        />
      </div>
      <Link
        class="play-again-btn"
        to="/rock-paper-scissors"
        onClick={() => setComputerCharacter("")}
      >
        Play Again
      </Link>
    </div>
  );
};

export default Showdown;
