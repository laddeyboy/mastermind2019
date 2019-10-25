import React, { useEffect } from "react";
import { EMPTY_PEG_SLOT } from "../util/constants";

const PegStyle: React.CSSProperties = {
  width: "4rem",
  height: "4rem",
  borderRadius: "50%",
  border: "1px solid black"
};

interface PassedProps {
  color: string;
  btnId: number;
  currentUserColor: string;
  activeStyle?: any; // this should be React.CSSProperties
  isColorPalette?: boolean;
  handleSetPegColor: (btnId: number, color: string) => void;
}

const ColoredPeg: React.FC<PassedProps> = props => {
  const [color] = React.useState<string>(props.color);
  const [active, toogleActive] = React.useState<boolean>(false);

  useEffect(() => {
    const { isColorPalette, currentUserColor, color } = props;
    if (isColorPalette && color !== currentUserColor) {
      toogleActive(false);
    }
  }, [props]);

  const setPegMarkerStyle = () => {
    const newStyle: any = { ...PegStyle }; // this should be React.CSSProperties
    const { isColorPalette } = props;
    if (isColorPalette) {
      newStyle.background = "white";
      newStyle.boxShadow = `6px 3px 2px gray, inset -15px -15px 25px 12px ${color}`;
      if (!active) {
      } else {
        const { activeStyle } = props;
        for (let cssProp of Object.keys(activeStyle)) {
          newStyle[cssProp] = activeStyle[cssProp];
        }
      }
    } else {
      // not a colorPalete Peg
      if (!active) {
        newStyle.background = EMPTY_PEG_SLOT;
        newStyle.boxShadow = `6px 3px 2px gray, inset -15px -15px 25px 12px ${color}`;
      } else {
        newStyle.background = "white";
        newStyle.boxShadow = `inset -10px -10px 25px 12px ${props.currentUserColor}`;
      }
    }
    return newStyle;
  };

  const handleClick = () => {
    console.log("props", props);
    props.handleSetPegColor(props.btnId, color);
    toogleActive(!active);
  };

  return <div style={setPegMarkerStyle()} onClick={handleClick} />;
};

export default ColoredPeg;
