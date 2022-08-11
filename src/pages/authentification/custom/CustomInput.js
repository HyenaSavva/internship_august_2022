import InputLabel from "@mui/material/InputLabel";
import InputBase from "@mui/material/InputBase";

import { LabelStyle, InputStyle } from "./CustomStyles";

const CustomInput = ({ label, id, placeholder, type}) => {

  return (
    <>
      <InputLabel htmlFor={id} sx={LabelStyle} id={id}>
        {label}
      </InputLabel>
      <InputBase
        sx={InputStyle}
        id={id}
        label={label}
        placeholder={placeholder}
        type={type}
      />
    </>
  );
};

export default CustomInput;
