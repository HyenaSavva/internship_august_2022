import { useState } from "react";

import CustomInput from "UI/inputs/CustomInput/CustomInput";
import { CustomButton } from "UI/button/CustomButton";
import { button } from "../../Option/OptionStyle";
import css from "./GenderStyle";

const Gender = ({ saveAllHandler, setValue, gender }) => {
  const [error, setError] = useState("");

  const saveHandler = () => {
    if (!gender) {
      setError({
        inputError: true,
        message: "Gender was not found.",
      });
    } else if (gender !== "male" && gender !== "female" && gender !== "none") {
      setError({
        inputError: true,
        message: "Gender does not exist.",
      });
    } else {
      setError({ inputError: false });
    }
    saveAllHandler({ Gender: gender });
  };

  return (
    <>
      <div id="firstInput">
        <CustomInput
          error={error}
          topLabel="Gender"
          bottomLabel="Introduce your gender."
          setEnteredValue={setValue}
          inputProps={{ list: "list", value: gender }}
          items={
            <datalist id="list">
              <option value="male" />
              <option value="female" />
              <option value="none" />
            </datalist>
          }
        />
      </div>
      <CustomButton sx={button} onClick={saveHandler}>
        Save
      </CustomButton>
      <style jsx>{css}</style>
    </>
  );
};

export default Gender;
