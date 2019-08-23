import React from "react";

interface OwnProps {
  color: string;
}

const ColoredPeg: React.FC<OwnProps> = props => {
  const [color, setColor] = React.useState<string>(props.color);
  const [active, toogleActive] = React.useState<boolean>(false);
  const inactiveButton = "3px 3px 2px gray";
  const PegStyle: React.CSSProperties = {
    width: "4rem",
    height: "4rem",
    borderRadius: "50%",
    border: "1px solid black",
    backgroundColor: color,
    position: "absolute",
    top: "50%",
    left: "50%",
    boxShadow: inactiveButton
  };

  const setPegMarkerStyle = () => {
    const newStyle = { ...PegStyle };
    if (active) {
      newStyle.boxShadow = "none";
    }
    return newStyle;
  };

  const handleClick = () => {
    toogleActive(!active);
  };

  return <div style={setPegMarkerStyle()} onClick={handleClick} />;
};

export default ColoredPeg;
