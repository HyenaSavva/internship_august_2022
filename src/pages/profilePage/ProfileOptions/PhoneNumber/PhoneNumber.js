import { useState } from "react";

import CustomInput from "UI/inputs/CustomInput/CustomInput";
import { CustomButton } from "UI/button/CustomButton";
import { button } from "../../Option/OptionStyle";
import css from "./PhoneNumberStyle";

const PhoneNumber = () => {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  const saveHandler = () => {
    if (!number || number.length < 10) {
      setError({
        inputError: true,
        message: "Number don't exist.",
      });
    } else if (number.length > 12) {
      setError({
        inputError: true,
        message: "Too much numbers.",
      });
    } else if (!/\d/.test(number)) {
      setError({
        inputError: true,
        message: "Number contains letters.",
      });
    } else {
      setError({ inputError: false });
    }
  };

  return (
    <>
      <div id="firstInput">
        <CustomInput
          error={error}
          topLabel="Phone number"
          placeholder={"0000-000-000"}
          bottomLabel="Introduce phone number."
          setEnteredValue={setNumber}
          type={"tel"}
        />
      </div>
      <CustomButton sx={button} onClick={saveHandler}>
        Save
      </CustomButton>
      <style jsx>{css}</style>
    </>
  );
};

export default PhoneNumber;
