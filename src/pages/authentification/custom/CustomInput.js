import InputLabel from "@mui/material/InputLabel";
import InputBase from "@mui/material/InputBase";

import { LabelStyle, InputStyle, InputStyleError } from "./CustomStyles";

const CustomInput = ({
  label,
  id,
  placeholder,
  type,
  setEnteredEmail,
  error,
}) => {
  return (
    <>
      <InputLabel htmlFor={id} sx={LabelStyle} id={id}>
        {label}
      </InputLabel>
      <InputBase
        onChange={(event) => setEnteredEmail(event.target.value)}
        sx={error.status ? InputStyleError : InputStyle}
        id={id}
        label={label}
        placeholder={placeholder}
        type={type}
      />
    </>
  );
};

export default CustomInput;
