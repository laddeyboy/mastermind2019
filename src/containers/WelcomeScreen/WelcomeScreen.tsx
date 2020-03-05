import React, { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import Modal from "../modal";
import SignIn from "./SignIn";

const WelcomeScreen: React.FC<RouteComponentProps> = props => {
  useEffect(() => {
    return () => console.log("WELCOME SCREEN UNMOUNTED....");
  });

  const WelcomeModalProps = {
    title: "Mastermind 2020"
  };

  const handleSetUserInfo = (userData: any) => {
    const { userEmail, userPassword } = userData;
    if (userEmail !== "" && userPassword !== "") {
      props.history.push("/game");
    }
  };

  return (
    <Modal modalProps={WelcomeModalProps}>
      <SignIn setUserInfo={handleSetUserInfo} />
    </Modal>
  );
};

export default withRouter(WelcomeScreen);
