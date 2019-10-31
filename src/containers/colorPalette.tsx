import React from "react";

import { COLOR_PALETTE } from "../util/constants";
import ColoredPeg from "./coloredPeg";
import { EMPTY_PEG_SLOT } from "../util/constants";

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
  currentPegObj: { btnId: number; color: string }; // the currentely selected button
  setUserColorChoice: (pegObj: { btnId: number; color: string }) => void;
}

const ColorPalette: React.FC<PassedProps> = props => {
  const setPegColor = (btnId: number, color: string) => {
    const { color: currentColor } = props.currentPegObj;
    if (color === currentColor) {
      props.setUserColorChoice({ btnId, color: EMPTY_PEG_SLOT });
    } else {
      props.setUserColorChoice({ btnId, color });
    }
  };

  const availableColors = COLOR_PALETTE.map((color, index) => {
    const { color: currentColor } = props.currentPegObj;
    const pegStyle: React.CSSProperties = {
      border: "1px solid #9ecaed",
      boxShadow: `inset -10px -10px 25px 12px ${color}, 0 0 10px #9ecaed`
    };

    return (
      <ColoredPeg
        color={color}
        btnId={index}
        key={index}
        activeStyle={color === currentColor ? pegStyle : {}}
        isColorPalette={true}
        handleSetPegColor={setPegColor}
        currentUserColor={currentColor}
      />
    );
  });
  return <div style={ColorPaletteStyle}>{availableColors}</div>;
};

export default ColorPalette;
