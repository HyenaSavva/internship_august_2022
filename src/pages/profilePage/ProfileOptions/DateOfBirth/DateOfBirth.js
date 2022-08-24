import { useState } from "react";

import CustomInput from "UI/inputs/CustomInput/CustomInput";
import { CustomButton } from "UI/button/CustomButton";
import { button } from "../../Option/OptionStyle";
import css from "./DateOfBirthStyle";

const DateOfBirth = ({ saveAllHandler, setValue, date }) => {
  const [error, setError] = useState("");

  let newDate = new Date(date?.slice(0, 10));
  try {
    newDate = newDate?.toISOString().split("T")[0];
  } catch (e) {}
  newDate = newDate?.toString();

  const saveHandler = () => {
    if (!date) {
      setError({
        inputError: true,
        message: "Not found date.",
      });
    } else {
      setError({ inputError: false });
      setValue(newDate);
      saveAllHandler({ DateOfBirth: newDate });
    }
  };
  return (
    <>
      <div id="firstInput">
        <CustomInput
          error={error}
          topLabel="Date"
          bottomLabel="Introduce your date of birth."
          setEnteredValue={setValue}
          inputProps={{ value: newDate }}
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
