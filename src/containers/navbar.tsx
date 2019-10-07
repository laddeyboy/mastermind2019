import React from "react";

const NavbarStyle = {
  width: "100%",
  height: "8vh",
  background: "darkgray",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  borderBottom: "3px solid black"
};

const NavBar = () => {
  return (
    <div style={NavbarStyle}>
      <div>User Info</div>
      <div>Game Status # Guesses Remainig/Wins Losses Maybe?</div>
      <div>Game Info? Objective?</div>
    </div>
  );
};

export default NavBar;
