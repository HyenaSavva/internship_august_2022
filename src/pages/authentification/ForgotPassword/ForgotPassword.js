import { Link } from "react-router-dom";

import CustomInput from "../custom/CustomInput";
import { CustomButton } from "UI/button/CustomButton";
import logo from "../../../assets/logo-assist-tagline.svg";
import { CustomButtonStyle } from "../custom/CustomStyles";
import ForgotPasswordStyle from "./ForgotPasswordStyle";
import useInputValidation from "hooks/useInputValidation";
import { resetPassword } from "services/auth";

const ForgotPassword = () => {
  const { email, setEmail, error, setError, isValid } = useInputValidation();

  const submitHandler = (e) => {
    e.preventDefault();
    const hasError = isValid(email);
    setError(hasError);
    if (!hasError.emailError) {
      resetPassword(email).then((data) => console.log(data));
    }
  };

  return (
    <main>
      <section className="logBlock">
        <form className="log" onSubmit={submitHandler}>
          <img src={logo} alt="desc" />
          <h1>Forgot Password</h1>
          <p>Password reset link sent to you email address.</p>
          <CustomInput
            error={error}
            setEmail={setEmail}
            topLabel="Email"
            id="Email"
            placeholder="Email"
            type="email"
          />
          <div className="logIn">
            <CustomButton
              sx={CustomButtonStyle}
              variant="contained"
              component={""}
            >
              Send reset link
            </CustomButton>
          </div>
          <p className="switch">
            <Link to={"/login"} style={{ textDecoration: "none" }}>
              <span className="login">Back to Log in</span>
            </Link>
          </p>
        </form>
      </section>
      <div className="imageBlock" />
      <style jsx>{ForgotPasswordStyle}</style>
    </main>
  );
};

export default ForgotPassword;
