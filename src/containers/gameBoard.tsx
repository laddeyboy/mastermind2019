import React, { useState, useEffect } from "react";
import ColorPalette from "./colorPalette";
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
  const [winningSequence] = useState(setupGameLogic());
  const [userAttempts, setGuesses] = useState(10);
  const [userCurrentColor, setCurrentColor] = useState({
    btnId: 0,
    color: "white"
  });
  const [currentAttempt, setCurrentAttempt] = useState(0);

  const handleSetUserColorChoice = (pegObj: {
    btnId: number;
    color: string;
  }) => {
    setCurrentColor(pegObj);
  };

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
          currentUserColor={userCurrentColor.color}
        />
      );
    }
    return gameColumns;
  };

  // return <div style={gameBoardStyling}>{drawGameBoardColumn()}</div>;
  return (
    <React.Fragment>
      <ColorPalette
        currentPegObj={userCurrentColor}
        setUserColorChoice={handleSetUserColorChoice}
      />
      <div style={gameBoardStyling}>{drawGameBoardColumn()}</div>
    </React.Fragment>
  );
};

export default GameBoard;
