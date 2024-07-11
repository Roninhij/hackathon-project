/* eslint-disable react/prop-types */
import { Input } from "../Input";
import "../LoginForm/LoginForm.css";
// import emailIcon from "../../assets/email.png";
// import personIcon from "../../assets/person.png";
// import passwordIcon from "../../assets/password.png";
// import passwordIcon from "../../assets/password.png";
export const LoginForm = ({
  action,
  userName,
  setUserName,
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
}) => {
  return (
    <>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Sign Up" && (
          <Input
            // img={personIcon}
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        )}
        <Input
          //   img={emailIcon}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          // img={passwordIcon}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {action === "Login" && (
        <div className="forget-password">
          Forgot Password? <span>Click Here!</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => handleSubmit("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => handleSubmit("Login")}
        >
          Log In
        </div>
      </div>
    </>
  );
};
