import InputLabel from "@mui/material/InputLabel";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

import { useState } from "react";
import { LabelStyle, InputStyle } from "./PasswordInputStyle";

const PasswordInput = ({ label, id, placeholder }) => {
  const [value, setValue] = useState({ type: "password", isShown: false });

  const handleClickShowPassword = () => {
    if (value.type === "password") {
      setValue({ type: "text", isShown: !value.isShown });
    } else {
      setValue({ type: "password", isShown: !value.isShown });
    }
  };

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
        type={value.type}
        endAdornment={
          <IconButton onClick={handleClickShowPassword}>
            {value.isShown ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        }
      />
    </>
  );
};

export default PasswordInput;
