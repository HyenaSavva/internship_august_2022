import { Link } from "react-router-dom";
import { useState } from "react";

import CustomInput from "../custom/CustomInput";
import PasswordInput from "../../../UI/inputs/PasswordInput";
import { CustomButton } from "UI/button/CustomButton";
import { GoogleButton } from "../custom/GoogleButton";
import logo from "../../../assets/logo-assist-tagline.svg";
import { CustomButtonStyle } from "../custom/CustomStyles";
import LoginStyle from "./LoginStyle";

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState({ status: false, message: "No errors" });

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !enteredEmail ||
      !enteredPassword ||
      enteredPassword.trim() === "" ||
      enteredPassword.trim().length < 9 ||
      !/\d/.test(enteredPassword)
    ) {
      setError({
        status: true,
        message: `Something went wrong with email or password.`,
      });
    }
  };

  return (
    <main>
      <section className="logBlock">
        <form className="log" onSubmit={submitHandler}>
          <img src={logo} alt="desc" />
          <h1>Login</h1>
          <p>Enter your account details below.</p>
          <CustomInput
            error={error}
            setEnteredEmail={setEnteredEmail}
            label="Email"
            id="Email"
            placeholder="Email"
            type="email"
          />
          <PasswordInput
            error={error}
            setEnteredPassword={setEnteredPassword}
            bottomLabel="At least 8 characters and one number."
            id="Password"
            placeholder="Password"
            topLabel="Password"
            type="password"
          />
          <CustomButton
            sx={CustomButtonStyle}
            variant="contained"
            component={""}
          >
            Log in
          </CustomButton>
          <div className="googleBtn">
            <GoogleButton>Log in with Google</GoogleButton>
          </div>
          <p className="switch">
            Don't have an accout ?
            <Link to={"/create-account"} style={{ textDecoration: "none" }}>
              <span className="login">Sign up</span>
            </Link>
          </p>
        </form>
      </section>
      <div className="imageBlock" />
      <style jsx>{LoginStyle}</style>
    </main>
  );
};

export default Login;
