import React, { useState } from "react";
import "../styles/SignInStyles.css";

// On Click Send to Welcome Screen
interface PassedProps {
  setUserInfo: (userData: { userEmail: string; userPassword: string }) => void;
}

const SignIn: React.FC<PassedProps> = props => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const handleSubmitUserData = () => {
    const { setUserInfo } = props;
    const userData = { userEmail, userPassword };
    setUserInfo(userData);
  };

  return (
    <div className="signin-content">
      <h4 style={{ textAlign: "center" }}>
        "Welcome to the redesigned Mastermind game!"
      </h4>
      <label>Email</label>
      <input
        type="text"
        className="input-field"
        onChange={e => setUserEmail(e.target.value)}
        value={userEmail}
      />
      <br />
      <label>Password</label>
      <input
        type="password"
        className="input-field"
        onChange={e => setUserPassword(e.target.value)}
        value={userPassword}
      />
      <button type="button" className="btn" onClick={handleSubmitUserData}>
        Submit
      </button>
    </div>
  );
};

export default SignIn;
