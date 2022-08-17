import Option from "../Option/Option";
import CustomInput from "../../authentification/custom/CustomInput";
import { CustomButton } from "../../../UI/button/CustomButton";
import css, { Component, button } from "../Option/OptionStyle";

const LoginAndSecurity = () => {
  return (
    <>
      <div className="title">Login & Security</div>
      <Option
        children={
          <>
            <section className="inputs">
              <div id="firstInput">
                <CustomInput error={false} topLabel="First Name" />
              </div>
              <div id="secondInput">
                <CustomInput error={false} topLabel="Last Name" />
              </div>
            </section>
            <CustomButton sx={button}>Save</CustomButton>
          </>
        }
        sx={Component}
        subTitle={"James Miler"}
        optionName={"Full Name"}
      />
      <Option
        children={
          <>
            <section className="inputs">
              <div id="firstInput">
                <CustomInput error={false} topLabel="Gender" />
              </div>
            </section>
            <CustomButton sx={button}>Save</CustomButton>
          </>
        }
        sx={Component}
        subTitle={"Male"}
        optionName={"Gender"}
      />
      <Option
        children={
          <>
            <section className="inputs">
              <div id="firstInput">
                <CustomInput error={false} topLabel="First Name" />
              </div>
            </section>
            <CustomButton sx={button}>Save</CustomButton>
          </>
        }
        sx={Component}
        subTitle={"05.05.2000"}
        optionName={"Date of birth"}
      />
      <Option
        children={
          <>
            <section className="inputs">
              <div id="firstInput">
                <CustomInput error={false} topLabel="First Name" />
              </div>
            </section>
            <CustomButton sx={button}>Save</CustomButton>
          </>
        }
        sx={Component}
        subTitle={"james.milner@example.com "}
        optionName={"Email address"}
      />
      <style jsx>{css}</style>
    </>
  );
};
export default LoginAndSecurity;
