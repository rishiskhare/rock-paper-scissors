import React from "react";

const Navbar = () => {
  return (
    <nav>
      <h2 className="nav--title">Rock Paper Scissors Lizard Spock</h2>
      <a
        className="nav--video__link"
        href="https://www.youtube.com/watch?v=x5Q6-wMx-K8"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="nav--video__text">See video</h2>
      </a>
    </nav>
  );
};

export default Navbar;
