import CustomInput from "./custom/CustomInput";
import PasswordInput from '../../UI/inputs/PasswordInput'
import { CustomButtonStyle } from "./custom/CustomStyle";

import logo from "../../assets/logo-assist-tagline.svg";
import { CustomButton } from "UI/button/CustomButton";
import { GoogleButton } from "./custom/GoogleButton";

import LoginStyle from "./LoginStyle";
import { InputLabel } from "@mui/material";
import { useState } from "react";

const Login = ({
  id,
  label = { label1: "Email", label2: "Password" },
  placeholder = {},
}) => {
  const [isLogin, setIsLogin] = useState(false);

  const clickHandler = () => {
    setIsLogin((state) => !state);
  };

  return (
    <main className="Main">
      <section className="LogBlock">
        <form className="Log">
          <img className="Img" src={logo} alt="desc" />

          <h1 className="H1">Create account</h1>
          <p className="P">Sing up for free and become member.</p>
          <GoogleButton>Sing up with Google</GoogleButton>
          <div className="orBlock">
            <div className="Line"></div>
            <p className="Por">OR</p>
            <div className="Line" />
          </div>
          <CustomInput
            label={label.label1}
            id={label.label1}
            placeholder={label.label1}
            type={label.label1}
          />
          <PasswordInput
            label={label.label2}
            id={label.label2}
            placeholder={label.label2}
            type={label.label2}
          />

          <InputLabel>At least 8 characters and one number.</InputLabel>
          <CustomButton sx={CustomButtonStyle} variant="contained">
            Sing up
          </CustomButton>
          <p className="P switch">
            Already have an accout ?
            <span className="login" onClick={clickHandler}>
              {isLogin ? "Sign Up" : "Log in"}
            </span>
          </p>
        </form>
      </section>
      <div className="ImageBlock" />
      <style jsx>{LoginStyle}</style>
    </main>
  );
};

export default Login;
