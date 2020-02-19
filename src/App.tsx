import React, { useState } from "react";
import "./App.css";
// import ColoredPeg from "./containers/coloredPeg";
import NavBar from "./containers/navbar";
import Modal from "./containers/modal";
import GameBoard from "./containers/gameBoard";
import WelcomeScreen from "./containers/WelcomeScreen/WelcomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/welcome" component={WelcomeScreen} />
        <Route exact path="/game">
          <h1>GAME</h1>
        </Route>
      </Switch>
    </Router>
  );

  // const [showModal, toggleModal] = useState(true);
  // const [showGameBoard, toggleGameBoard] = useState(true); // set back to false after DEBUG

  // const handleModalClick = () => {
  //   console.log("Im clicking on my modal");
  // };
  // const handleModalClose = () => {
  //   toggleModal(!showModal);
  //   toggleGameBoard(!showGameBoard);
  // };

  // const ModalProps = {
  //   title: "MasterMind 2019",
  //   // content could really be a component that just needs to be rendered based on modal.
  //   content:
  //     "Welcome to the remastered version of MasterMind.  This project was originally started as a final project for DigitalCrafts coding bootcamp",
  //   onClick: handleModalClick,
  //   onClose: handleModalClose
  // };

  // // BUG: everytime this rerenders I'm resetting my winning sequence!!!

  // return (
  //   <div className="App">
  //     <NavBar />
  //     {/* {showModal ? <Modal modalProps={ModalProps} /> : null} */}
  //     {showGameBoard ? <GameBoard /> : null}
  //   </div>
  // );
};

export default App;
