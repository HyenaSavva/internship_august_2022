import { useState } from "react";

import CustomInput from "UI/inputs/CustomInput/CustomInput";
import { CustomButton } from "UI/button/CustomButton";
import { button } from "../../Option/OptionStyle";
import css from "./GenderStyle";

const Gender = () => {
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");

  const saveHandler = () => {
    if (!gender) {
      setError({
        inputError: true,
        message: "Gender was not found.",
      });
    } else if (gender !== "male" && gender !== "female") {
      setError({
        inputError: true,
        message: "Gender does not exist.",
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
          topLabel="Gender"
          bottomLabel="Introduce your gender."
          setEnteredValue={setGender}
          inputProps={{ list: "list" }}
          items={
            <datalist id="list">
              <option value="male" />
              <option value="female" />
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
