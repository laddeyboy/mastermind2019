import React, { useState } from "react";
import ColorPalette from "./colorPalette";
import GameBoardColumn from "./gameBoardColumn";
import { isEqual } from "lodash";

import { setupGameLogic, setupGameBoard } from "../util/helpers";
import { EMPTY_PEG_SLOT } from "../util/constants";

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
  // const [userSequences, setUserSequence] = useState({});
  const [userAttempts, setGuesses] = useState(10);
  const [userSequences, setUserSequence] = useState(
    setupGameBoard(userAttempts)
  );
  const [userCurrentColor, setCurrentColor] = useState({
    btnId: 0,
    color: EMPTY_PEG_SLOT
  });
  const [currentAttempt, setCurrentAttempt] = useState(0);

  const handleSetUserColorChoice = (pegObj: {
    btnId: number;
    color: string;
  }) => {
    setCurrentColor(pegObj);
  };

  const handleSubmitAttempt = (userSequence: Array<string>) => {
    setUserSequence({ [`row${currentAttempt}`]: userSequence });
    setCurrentAttempt(currentAttempt + 1);
    if (isEqual(userSequence, winningSequence)) {
      console.log("WINNER");
    }
    setCurrentAttempt(currentAttempt + 1);
    console.log("user is guessing", userSequence);
  };

  const drawGameBoardColumn = () => {
    const gameColumns = [];
    for (let i = 0; i < userAttempts; i++) {
      const rowInd = `row${i}`;
      gameColumns.push(
        <GameBoardColumn
          key={rowInd}
          userSequence={userSequences[rowInd]}
          rowInd={i}
          submitAttempt={handleSubmitAttempt}
          currentAttempt={currentAttempt}
          currentUserColor={userCurrentColor.color}
        />
      );
    }
    return gameColumns;
  };

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
