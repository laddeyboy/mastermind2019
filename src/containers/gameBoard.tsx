import React, { useState, useEffect } from "react";
import ColorPalette from "./colorPalette";
import { isEqual } from "lodash";

import { createWinningSequence, setupGameBoard } from "../util/helpers";
import { EMPTY_PEG_SLOT } from "../util/constants";
import PegBoard from "./pegBoard";

const GameBoard: React.FC = () => {
  // const [userSequences, setUserSequence] = useState({});
  const [userAttempts] = useState(10); // ADD setGuesses when I setup game start modal
  const [currentAttempt, setCurrentAttempt] = useState(0);
  const [winningSequence, setWinningSequence] = useState<Array<string>>([]);
  const [userSequences, setUserSequence] = useState<{
    [key: string]: Array<string>;
  }>({});
  const [userCurrentColor, setCurrentColor] = useState({
    btnId: 0,
    color: EMPTY_PEG_SLOT
  });

  useEffect(() => {
    setWinningSequence(createWinningSequence());
    setupGameBoard(userAttempts);
  }, []);

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

  console.log("winning Sequence", winningSequence);

  return (
    <React.Fragment>
      <ColorPalette
        currentPegObj={userCurrentColor}
        setUserColorChoice={handleSetUserColorChoice}
      />
      <PegBoard
        userAttempts={userAttempts}
        currentAttempt={currentAttempt}
        userCurrentColor={userCurrentColor}
        userSequences={userSequences}
        handleSubmitAttempt={handleSubmitAttempt}
      />
    </React.Fragment>
  );
};

export default GameBoard;
