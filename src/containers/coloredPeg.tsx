import React from "react";

const ColoredPeg: React.FC = () => {
  const [color, setColor] = React.useState<string>("red");

  const PegStyle: React.CSSProperties = {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    border: "1px solid black",
    backgroundColor: color
  };
  return <div style={PegStyle} />;
};

export default ColoredPeg;
