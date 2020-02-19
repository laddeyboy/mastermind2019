import React, { useState } from "react";

import Modal from "../modal";

const WelcomeScreen: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const ModalContent = () => {
    return (
      <div>
        <h4>"Welcome to the redesigned Mastermind game!"</h4>
        <label>Email</label>
        <input
          type="text"
          onChange={e => setUserEmail(e.target.value)}
          value={userEmail}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          onChange={e => setUserPassword(e.target.value)}
          value={userPassword}
        />
      </div>
    );
  };

  const WelcomeModalProps = {
    title: "Mastermind 2020",
    content: ModalContent()
  };

  console.log(`email ${userEmail}, pass ${userPassword}`);
  return <Modal modalProps={WelcomeModalProps} />;
};

export default WelcomeScreen;
