import PasswordInput from "../../../UI/inputs/PasswordInput";
import { CustomButton } from "UI/button/CustomButton";
import logo from "../../../assets/logo-assist-tagline.svg";
import { CustomButtonStyle } from "../custom/CustomStyles";
import ResetPasswordStyle from "./ResetPasswordStyle";
import usePasswordMatch from "hooks/usePasswordMatch";

const ResetPassword = () => {
  const { error, secondError, setPass, setSecPass, passwordsMatch } =
    usePasswordMatch();
  const submitHandler = (e) => {
    e.preventDefault();
    passwordsMatch();
  };

  return (
    <main>
      <section className="logBlock">
        <form className="log" onSubmit={submitHandler}>
          <img src={logo} alt="desc" />
          <h1>Reset password</h1>
          <p>Create a new password for your account.</p>
          <PasswordInput
            error={error}
            setPassword={setPass}
            bottomLabel="At least 8 characters and one number."
            id="Password"
            placeholder="Password"
            topLabel="Password"
            type="password"
          />
          <div className="passConfirm">
            <PasswordInput
              error={secondError}
              setPassword={setSecPass}
              bottomLabel=""
              id="Password"
              placeholder="Password"
              topLabel="Confirm password"
              type="password"
            />
          </div>
          <div className="logIn">
            <CustomButton
              sx={CustomButtonStyle}
              variant="contained"
              component={""}
            >
              Confirm password
            </CustomButton>
          </div>
        </form>
      </section>
      <div className="imageBlock" />
      <style jsx>{ResetPasswordStyle}</style>
    </main>
  );
};

export default ResetPassword;
