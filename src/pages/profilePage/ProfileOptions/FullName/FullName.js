import { useState } from "react";

import CustomInput from "UI/inputs/CustomInput/CustomInput";
import { CustomButton } from "UI/button/CustomButton";
import { button } from "../../Option/OptionStyle";
import css from "./FullNameStyle";

const FullName = ({
  saveAllHandler,
  setValue,
  setSecValue,
  name,
  lastName,
}) => {
  const [nameError, setNameError] = useState({ inputError: false });
  const [surNameError, setSurNameError] = useState({ inputError: false });

  const saveHandler = () => {
    if (!name) {
      setNameError({
        inputError: true,
        message: "At least 3 characters.",
      });
    } else if (/\d/.test(name)) {
      setNameError({
        inputError: true,
        message: "Name contains numbers.",
      });
    } else if (name.length > 15) {
      setNameError({
        inputError: true,
        message: "Too much characters.",
      });
    } else {
      setNameError({
        inputError: false,
      });
    }

    if (!lastName || lastName.length < 3) {
      setSurNameError({
        inputError: true,
        message: "At least 3 characters.",
      });
    } else if (/\d/.test(lastName)) {
      setSurNameError({
        inputError: true,
        message: "Surame contains numbers.",
      });
    } else if (lastName.length > 15) {
      setSurNameError({
        inputError: true,
        message: "Too much characters.",
      });
    } else {
      setSurNameError({
        inputError: false,
      });
      saveAllHandler({ FullName: name + " " + lastName });
    }
  };

  return (
    <>
      <section className="inputs">
        <div id="firstInput">
          <CustomInput
            error={nameError}
            topLabel="First Name"
            placeholder={"Name"}
            bottomLabel="Introduce your name and surname."
            setEnteredValue={setValue}
            inputProps={{ value: name }}
          />
        </div>
        <div id="secondInput">
          <CustomInput
            error={surNameError}
            topLabel="Last Name"
            placeholder={"Surname"}
            bottomLabel=""
            setEnteredValue={setSecValue}
            inputProps={{ value: lastName }}
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

export default FullName;
