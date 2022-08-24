import { useState } from "react";

import CustomInput from "UI/inputs/CustomInput/CustomInput";
import { CustomButton } from "UI/button/CustomButton";
import { button } from "../../Option/OptionStyle";
import css from "./AddressStyle";

const Address = ({ saveAllHandler, setValue, address }) => {
  const [error, setError] = useState("");

  const saveHandler = () => {
    if (!address || address.length < 3) {
      setError({
        inputError: true,
        message: "No address found.",
      });
    } else if (address.length > 30) {
      setError({
        inputError: true,
        message: "Too much characters.",
      });
    } else {
      setError({ inputError: false });
      setValue(address);
      saveAllHandler({ Address: address });
    }
  };

  return (
    <>
      <div id="firstInput">
        <CustomInput
          error={error}
          topLabel="Address"
          placeholder={"Address"}
          bottomLabel="Introduce address."
          setEnteredValue={setValue}
          inputProps={{ value: address }}
        />
      </div>
      <CustomButton sx={button} onClick={saveHandler}>
        Save
      </CustomButton>
      <style jsx>{css}</style>
    </>
  );
};

export default Address;
