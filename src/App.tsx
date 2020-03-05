import React from "react";
import "./App.css";
import GameBoard from "./containers/gameBoard";
import WelcomeScreen from "./containers/WelcomeScreen/WelcomeScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/welcome" component={WelcomeScreen} />
        <Route exact path="/game" component={GameBoard}></Route>
        <Redirect path="/" to="/welcome" />
      </Switch>
    </Router>
  );
};

export default App;
