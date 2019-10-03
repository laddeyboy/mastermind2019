import React from "react";
import ColoredPeg from "./coloredPeg";

const gameRowStyle: React.CSSProperties = {
  height: "100%",
  width: "calc(100% / 11)",
  border: ".5px solid black"
};

const gameRowButtonSection: React.CSSProperties = {
  height: "90%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center"
};

interface PassedProps {
  rowInd: number;
}

const gameBoardColumn: React.FC<PassedProps> = props => {
  return (
    <div style={gameRowStyle}>
      <div>Guess {props.rowInd + 1}</div>
      <div style={gameRowButtonSection}>
        <ColoredPeg color="blue" />
        <ColoredPeg color="red" />
        <ColoredPeg color="yellow" />
        <ColoredPeg color="black" />
      </div>
    </div>
  );
};

export default gameBoardColumn;
