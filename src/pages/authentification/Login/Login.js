import { Link } from "react-router-dom";

import CustomInput from "../custom/CustomInput";
import PasswordInput from "../../../UI/inputs/PasswordInput";
import { CustomButton } from "UI/button/CustomButton";
import { GoogleButton } from "../custom/GoogleButton";
import logo from "../../../assets/logo-assist-tagline.svg";
import { CustomButtonStyle } from "../custom/CustomStyles";
import LoginStyle from "./LoginStyle";
import useInputValidation from "hooks/useInputValidation";

const Login = () => {
  const { email, password, setEmail, setPassword, error, setError, isValid } =
    useInputValidation();

  const submitHandler = (e) => {
    e.preventDefault();
    setError(isValid(email, password));
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
            setEmail={setEmail}
            topLabel="Email"
            id="Email"
            placeholder="Email"
            type=""
          />
          <PasswordInput
            error={error}
            setPassword={setPassword}
            bottomLabel="At least 8 characters and one number."
            id="Password"
            placeholder="Password"
            topLabel="Password"
            type="password"
          />
          <div className="logInLabel">
            <div className="checkbox">
              <input type="checkbox" id="checkbox" />
              <label>Remember me</label>
            </div>
            <Link to={"/forgot-password"} style={{ textDecoration: "none" }}>
              <span className="login">Forgot Password ?</span>
            </Link>
          </div>

          <div className="logIn">
            <CustomButton
              sx={CustomButtonStyle}
              variant="contained"
              component={""}
            >
              Log in
            </CustomButton>
          </div>
          <div className="googleBtn">
            <GoogleButton>Log in with Google</GoogleButton>
          </div>
          <p className="switch">
            Don't have an account ?
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
