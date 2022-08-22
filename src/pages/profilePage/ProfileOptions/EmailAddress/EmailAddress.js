import { useState } from "react";

import CustomInput from "UI/inputs/CustomInput/CustomInput";
import { CustomButton } from "UI/button/CustomButton";
import { button } from "../../Option/OptionStyle";
import css from "./EmailAddressStyle";

const EmailAddress = () => {
  const [mail, setMail] = useState("");
  const [error, setError] = useState("");

  const saveHandler = () => {
    if (!mail) {
      setError({
        inputError: true,
        message: "Mail don't exist.",
      });
    } else if (!mail.includes("@")) {
      setError({
        inputError: true,
        message: "Mail don't inculdes '@'.",
      });
    } else if (!mail.includes(".com")) {
      setError({
        inputError: true,
        message: "Mail don't includes domain.",
      });
    } else {
      setError({
        inputError: false,
      });
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
          setEnteredValue={setMail}
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
