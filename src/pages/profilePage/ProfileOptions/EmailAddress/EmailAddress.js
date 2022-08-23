import { useState } from "react";

import CustomInput from "UI/inputs/CustomInput/CustomInput";
import { CustomButton } from "UI/button/CustomButton";
import { button } from "../../Option/OptionStyle";
import css from "./EmailAddressStyle";

const EmailAddress = ({ saveAllHandler, setValue, email }) => {
  const [error, setError] = useState("");

  const saveHandler = () => {
    if (!email) {
      setError({
        inputError: true,
        message: "Mail don't exist.",
      });
    } else if (!email.includes("@")) {
      setError({
        inputError: true,
        message: "Mail don't inculdes '@'.",
      });
    } else if (!email.includes(".com")) {
      setError({
        inputError: true,
        message: "Mail don't includes domain.",
      });
    } else {
      setError({ inputError: false });
      setValue(email);
      saveAllHandler({ Email: email });
    }
  };

  return (
    <>
      <div id="firstInput">
        <CustomInput
          error={error}
          topLabel="Email"
          placeholder={"Email"}
          bottomLabel="Introduce your email."
          setEnteredValue={setValue}
          inputProps={{ value: email }}
        />
      </div>
      <CustomButton sx={button} onClick={saveHandler}>
        Save
      </CustomButton>
      <style jsx>{css}</style>
    </>
  );
};

export default EmailAddress;
