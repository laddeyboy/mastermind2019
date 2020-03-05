import React, { useState, useEffect } from "react";
import ColorPalette from "./colorPalette";
import { isEqual } from "lodash";

import { createWinningSequence, setupGameBoard } from "../util/helpers";
import { EMPTY_PEG_SLOT } from "../util/constants";
import PegBoard from "./pegBoard";
import Nav from "./navbar";

const GameBoard: React.FC = () => {
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
    // componentDidMount()
    setWinningSequence(createWinningSequence());
    setupGameBoard(userAttempts);
  }, [userAttempts]);

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

  return (
    <React.Fragment>
      <Nav />
      <ColorPalette
        currentPegObj={userCurrentColor}
        setUserColorChoice={handleSetUserColorChoice}
      />
      {winningSequence.length > 0 ? (
        <PegBoard
          userAttempts={userAttempts}
          currentAttempt={currentAttempt}
          userCurrentColor={userCurrentColor}
          userSequences={userSequences}
          handleSubmitAttempt={handleSubmitAttempt}
          solutionCode={winningSequence}
        />
      ) : null}
    </React.Fragment>
  );
};

export default GameBoard;
