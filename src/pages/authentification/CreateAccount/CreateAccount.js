import { Link } from "react-router-dom";

import CustomInput from "../custom/CustomInput";
import PasswordInput from "../../../UI/inputs/PasswordInput";
import { CustomButton } from "UI/button/CustomButton";
import { GoogleButton } from "../custom/GoogleButton";
import logo from "../../../assets/logo-assist-tagline.svg";
import { CustomButtonStyle } from "../custom/CustomStyles";
import CreateAccountStyle from "./CreateAccountStyle";
import useInputValidation from "hooks/useInputValidation";

import { createUser } from "../services/api";

const CreateAccount = () => {
  const { email, password, setEmail, setPassword, error, setError, isValid } =
    useInputValidation();

  const submitHandler = (e) => {
    e.preventDefault();
    const hasError = isValid(email, password);
    setError(hasError);
    if (!hasError.emailError && !hasError.passwordError) {
      createUser(email, password).then((data) => console.log(data));
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
            setEmail={setEmail}
            topLabel="Email"
            placeholder="Email"
            type="email"
          />
          <PasswordInput
            error={error}
            setPassword={setPassword}
            bottomLabel="At least 8 characters and one number."
            placeholder="Password"
            topLabel="Password"
            type="password"
          />
          <div className="signUp">
            <CustomButton
              sx={CustomButtonStyle}
              variant="contained"
              component={""}
            >
              Sign up
            </CustomButton>
          </div>
          <p className="switch">
            Already have an account ?
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
