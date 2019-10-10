import React from "react";

import { COLOR_PALETTE } from "../util/constants";
import ColoredPeg from "./coloredPeg";

const ColorPaletteStyle = {
  height: "4.5rem",
  width: "30rem",
  border: "2px solid black",
  backgroundColor: "gray",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  position: `absolute` as `absolute`,
  top: "15%",
  left: "50%",
  marginLeft: "-15rem"
};

interface PassedProps {
  currentPegObj: { btnId: number; color: string };
  setUserColorChoice: (pegObj: { btnId: number; color: string }) => void;
}

const ColorPalette: React.FC<PassedProps> = props => {
  const setPegColor = (btnId: number, color: string) => {
    props.setUserColorChoice({ btnId, color });
  };

  const availableColors = COLOR_PALETTE.map((color, index) => {
    return (
      <ColoredPeg
        color={color}
        btnId={index}
        key={index}
        isPaletteColor={true}
        handleSetPegColor={setPegColor}
        currentUserColor={color}
      />
    );
  });
  return <div style={ColorPaletteStyle}>{availableColors}</div>;
};

export default ColorPalette;
