import { Link } from "react-router-dom";
import { useState } from "react";

import CustomInput from "../custom/CustomInput";
import PasswordInput from "../../../UI/inputs/PasswordInput";
import { CustomButton } from "UI/button/CustomButton";
import { GoogleButton } from "../custom/GoogleButton";
import logo from "../../../assets/logo-assist-tagline.svg";
import { CustomButtonStyle } from "../custom/CustomStyles";
import CreateAccountStyle from "./CreateAccountStyle";

const CreateAccount = () => {
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
          <h1>Create account</h1>
          <p>Sign up for free and become member.</p>
          <GoogleButton>Sign up with Google</GoogleButton>
          <div className="orBlock">
            <div className="line"></div>
            <p>OR</p>
            <div className="line" />
          </div>
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
            Sign up
          </CustomButton>
          <p className="switch">
            Already have an accout ?
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              <span className="login">Log in</span>
            </Link>
          </p>
        </form>
      </section>
      <div className="imageBlock" />
      <style jsx>{CreateAccountStyle}</style>
    </main>
  );
};

export default CreateAccount;
