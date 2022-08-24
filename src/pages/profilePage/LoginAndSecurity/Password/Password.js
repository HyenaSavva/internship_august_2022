import PasswordInput from "UI/inputs/PasswordInput";
import { button } from "../../Option/OptionStyle";
import { CustomButton } from "UI/button/CustomButton";
import css from "./PasswordStyle";

import usePasswordMatch from "hooks/usePasswordMatch";

const Password = () => {
  const { error, secondError, setPass, setSecPass, passwordsMatch } =
    usePasswordMatch();
  const saveHandler = () => {
    passwordsMatch();
  };

  return (
    <>
      <section className="inputs">
        <div id="firstInput">
          <PasswordInput
            error={error}
            setPassword={setPass}
            bottomLabel="At least 8 characters and one number."
            id="Password"
            placeholder="Password"
            topLabel="Password"
            type="password"
          />
        </div>
        <div id="secondInput">
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
      </section>
      <CustomButton sx={button} onClick={saveHandler}>
        Save
      </CustomButton>
      <style jsx>{css}</style>
    </>
  );
};

export default Password;
