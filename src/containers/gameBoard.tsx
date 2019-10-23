import React, { useState, useEffect } from "react";
import ColorPalette from "./colorPalette";
import GameBoardColumn from "./gameBoardColumn";
import { isEqual } from "lodash";

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
    console.log("setting current color to -> ", pegObj.color);
    setCurrentColor(pegObj);
  };

  const handleSubmitAttempt = (userSequence: Array<string>) => {
    if (isEqual(userSequence, winningSequence)) {
      console.log("WINNER");
    }
    setCurrentAttempt(currentAttempt + 1);
    console.log("user is guessing", userSequence);
  };

  const drawGameBoardColumn = () => {
    const gameColumns = [];
    for (let i = 0; i < userAttempts; i++) {
      gameColumns.push(
        <GameBoardColumn
          key={"row" + i.toString()}
          rowInd={i}
          submitAttempt={handleSubmitAttempt}
          currentAttempt={currentAttempt}
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
