import Option from "../Option/Option";
import CustomInput from "../../authentification/custom/CustomInput";
import css from "../LoginAndSecurity/LoginAndSecurityStyle";

import useOptionsValidation from "hooks/useOptionsValidation";

const LoginAndSecurity = () => {
  const props = useOptionsValidation({
    optionName: [
      "Full Name",
      "Gender",
      "Date of birth",
      "Email address",
      "Phone number",
      "Address",
    ],
  });
  return (
    <>
      <div className="title">Login & Security</div>
      <Option
        optionName={"Full Name"}
        subTitle={props[0].name + " " + props[0].lastName}
        // disabled={isOpened}
        // clickHandler={clickHandler}
        inputHandler={props[0].handler}
        children={
          <>
            <section className="inputs">
              <div id="firstInput">
                <CustomInput
                  error={props[0].error}
                  topLabel="First Name"
                  setEmail={props[0].setEnteredName}
                />
              </div>
              <div id="secondInput">
                <CustomInput
                  error={props[0].error}
                  topLabel="Last Name"
                  setEmail={props[0].setEnteredLastName}
                />
              </div>
            </section>
          </>
        }
        // childStyle={childStyle}
      />
      <style jsx>{css}</style>
    </>
  );
};
export default LoginAndSecurity;
