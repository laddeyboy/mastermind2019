import React, { useState } from "react";
import "./App.css";
import ColoredPeg from "./containers/coloredPeg";
import Modal from "./containers/modal";

const App: React.FC = () => {
  const [showModal, toggleModal] = useState(true);
  const [showGameBoard, toggleGameBoard] = useState(false);

  const handleModalClick = () => {
    console.log("Im clicking on my modal");
  };

  const ModalProps = {
    title: "MasterMind 2019",
    content:
      "Welcome to the remastered version of MasterMind.  This project was originally started as a final project for DigitalCrafts coding bootcamp",
    onClick: handleModalClick
  };

  return (
    <div className="App">
      {showModal ? <Modal modalProps={ModalProps} /> : null}
      {showGameBoard ? <ColoredPeg color="blue" /> : null}
    </div>
  );
};

export default App;
