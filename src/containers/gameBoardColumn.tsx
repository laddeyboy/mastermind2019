import React, { useState } from "react";
import ColoredPeg from "./coloredPeg";
import { EMPTY_PEG_SLOT } from "../util/constants";

const gameRowStyle: React.CSSProperties = {
  height: "100%",
  width: "calc(100% / 11)",
  border: ".5px solid black",
  opacity: 0.2 //this is what makes it dark
};

const gameRowBtnSection: React.CSSProperties = {
  height: "95%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center"
};

const submitAttemptStyle: React.CSSProperties = {
  width: "95%",
  backgroundColor: "green",
  color: "white",
  border: "1px solid white",
  borderRadius: "5px",
  fontSize: ".75rem",
  fontWeight: "bold"
};

interface PassedProps {
  rowInd: number;
  currentAttempt: number;
  currentUserColor: string;
  userSequence: Array<string>;
  submitAttempt: (attemptArray: Array<string>) => void;
}

const GameBoardColumn: React.FC<PassedProps> = props => {
  const [attemptArray, setAttemptArray] = useState<Array<string>>(
    Array(4).fill("")
  );

  const handleCheckAttempt = () => {
    props.submitAttempt(attemptArray);
  };

  const handleSetAttempt = (btnId: number, color: string) => {
    const { currentAttempt, rowInd } = props;
    if (currentAttempt === rowInd) {
      const newAttempt = [...attemptArray];
      newAttempt[btnId] = props.currentUserColor;
      setAttemptArray(newAttempt);
    }
  };

  const createdPegHoles = () => {
    const pegHoleArray = [];
    for (let i = 0; i < 4; i++) {
      pegHoleArray.push(
        <ColoredPeg
          key={i}
          color={attemptArray[i] === "" ? EMPTY_PEG_SLOT : attemptArray[i]}
          currentUserColor={props.currentUserColor}
          btnId={i}
          handleSetPegColor={handleSetAttempt}
        />
      );
    }
    return pegHoleArray;
  };

  const createdMarkerHoles = () => {
    // const markerHoleArray = [];
    // need to rethink this whole damn thing!!!!
  };

  const activateGameRow = () => {
    const { currentAttempt, rowInd } = props;
    if (currentAttempt >= rowInd) {
      const updatedGameRowStyle = { ...gameRowStyle };
      updatedGameRowStyle.opacity = 1;
      return updatedGameRowStyle;
    }
    return gameRowStyle;
  };

  return (
    <div style={activateGameRow()}>
      <div style={{ padding: "2%" }}>Guess {props.rowInd + 1}</div>
      <div style={gameRowBtnSection}>
        {createdPegHoles()}
        {createdMarkerHoles()}
        <div>
          <button
            type="button"
            style={submitAttemptStyle}
            onClick={handleCheckAttempt}
          >
            Check Guess
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameBoardColumn;
