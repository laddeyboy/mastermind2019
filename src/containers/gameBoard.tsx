import React, { useState, useEffect } from "react";
import GameBoardColumn from "./gameBoardColumn";

import { setupGameLogic } from "../util/helpers";

const gameBoardStyling: React.CSSProperties = {
  width: "80vw",
  height: "40vh",
  position: "absolute",
  top: "30%",
  left: "calc(50% - 40vw",
  border: "2px solid black",
  display: "flex",
  backgroundColor: "#b3b3b3"
};

const GameBoard: React.FC = () => {
  const [userAttempts, setGuesses] = useState(10);
  const [currentAttempt, setCurrentAttempt] = useState(0);

  useEffect(() => console.log("winning sequence", setupGameLogic()));

  const handleSubmitAttempt = (attemptArray: Array<string>) => {
    console.log("user is guessing", attemptArray);
  };

  const drawGameBoardColumn = () => {
    const gameColumns = [];
    for (let i = 0; i < userAttempts; i++) {
      gameColumns.push(
        <GameBoardColumn
          key={"row" + i.toString()}
          rowInd={i}
          submitAttempt={handleSubmitAttempt}
        />
      );
    }
    return gameColumns;
  };

  return <div style={gameBoardStyling}>{drawGameBoardColumn()}</div>;
};

export default GameBoard;
