import React from "react";
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

interface PassedProps {
  userAttempts: number;
  currentAttempt: number;
  userCurrentColor: { btnId: number; color: string };
  userSequences: {
    [key: string]: Array<string>;
  };
  handleSubmitAttempt: (userSequence: Array<string>) => void;
}

const PegBoard: React.FC<PassedProps> = props => {
  const {
    userAttempts,
    currentAttempt,
    userCurrentColor,
    userSequences,
    handleSubmitAttempt
  } = props;

  const createGameBoardColumns = () => {
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

  return <div style={gameBoardStyling}>{createGameBoardColumns()}</div>;
};

export default PegBoard;
