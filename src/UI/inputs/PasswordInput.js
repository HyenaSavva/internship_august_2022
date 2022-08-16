import { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

import {
  BottomLabelStyle,
  TopLabelStyle,
  InputStyleError,
  InputStyle,
} from "./PasswordInputStyle";

const PasswordInput = ({
  topLabel,
  bottomLabel,
  placeholder,
  error,
  setPassword,
}) => {
  const [isShown, setIsShown] = useState(false);

  const visibilityHandler = () => setIsShown((prev) => !prev);

  return (
    <>
      <InputLabel sx={TopLabelStyle}>{topLabel}</InputLabel>
      <InputBase
        onChange={setPassword}
        error={error.passwordError}
        sx={error.passwordError ? InputStyleError : InputStyle}
        placeholder={placeholder}
        type={isShown ? "text" : "password"}
        inputProps={{ maxLength: 30 }}
        endAdornment={
          <IconButton onClick={visibilityHandler}>
            {isShown ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        }
      />
      <InputLabel sx={BottomLabelStyle} error={error.passwordError}>
        {error.passwordError ? error.message : bottomLabel}
      </InputLabel>
    </>
  );
};

export default PasswordInput;
