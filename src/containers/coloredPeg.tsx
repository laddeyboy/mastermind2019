import React from "react";

interface OwnProps {
  color: string;
  btnId: number;
  handleSetAttemptPeg: (btnId: number, color: string) => void;
}

const ColoredPeg: React.FC<OwnProps> = props => {
  const [color, setColor] = React.useState<string>(props.color);
  const [active, toogleActive] = React.useState<boolean>(false);
  const inactiveButton = "6px 3px 2px gray";
  const PegStyle: React.CSSProperties = {
    width: "4rem",
    height: "4rem",
    borderRadius: "50%",
    border: "1px solid black",
    background: "white",
    boxShadow: `${inactiveButton}, inset -15px -15px 25px 12px ${color}`
  };

  const setPegMarkerStyle = () => {
    const newStyle = { ...PegStyle };
    if (active) {
      newStyle.background = "white";
      newStyle.boxShadow = `inset -10px -10px 25px 12px ${color}`;
    }
    return newStyle;
  };

  const handleClick = () => {
    toogleActive(!active);
    props.handleSetAttemptPeg(props.btnId, color);
  };

  return <div style={setPegMarkerStyle()} onClick={handleClick} />;
};

export default ColoredPeg;
