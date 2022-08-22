import { useState } from "react";

import CustomInput from "UI/inputs/CustomInput/CustomInput";
import { CustomButton } from "UI/button/CustomButton";
import { button } from "../../Option/OptionStyle";
import css from "./DateOfBirthStyle";

const DateOfBirth = () => {
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const saveHandler = () => {
    if (!date) {
      setError({
        inputError: true,
        message: "Not found date.",
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
          topLabel="Date"
          bottomLabel="Introduce your date of birth."
          setEnteredValue={setDate}
          type={"date"}
        />
      </div>
      <CustomButton sx={button} onClick={saveHandler}>
        Save
      </CustomButton>
      <style jsx>{css}</style>
    </>
  );
};

export default DateOfBirth;
