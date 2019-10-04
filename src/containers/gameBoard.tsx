import React, { useState } from "react";
import GameBoardColumn from "./gameBoardColumn";

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

const gameBoard: React.FC = () => {
  // const [userAttempts, setGuesses] = useState(10);
  const userAttempts = 10;

  const drawGameBoardColumn = () => {
    const gameColumns = [];
    for (let i = 0; i < userAttempts; i++) {
      gameColumns.push(
        <GameBoardColumn key={"row" + i.toString()} rowInd={i} />
      );
    }
    return gameColumns;
  };

  return <div style={gameBoardStyling}>{drawGameBoardColumn()}</div>;
};

export default gameBoard;
