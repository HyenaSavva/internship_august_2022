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
  id,
  placeholder,
  error,
  setEnteredPassword,
}) => {
  const [isShown, setIsShown] = useState(false);

  const visibilityHandler = () => setIsShown((prev) => !prev);

  return (
    <>
      <InputLabel htmlFor={id} sx={TopLabelStyle} id={id}>
        {topLabel}
      </InputLabel>
      <InputBase
        onChange={(event) => {
          setEnteredPassword(event.target.value);
        }}
        error={error.status}
        sx={error.status ? InputStyleError : InputStyle}
        id="password"
        placeholder={placeholder}
        type={isShown ? "text" : "password"}
        inputProps={{ maxLength: 30 }}
        endAdornment={
          <IconButton onClick={visibilityHandler}>
            {isShown ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        }
      />
      <InputLabel
        htmlFor={id}
        sx={BottomLabelStyle}
        id={id}
        error={error.status}
      >
        {error.status ? error.message : bottomLabel}
      </InputLabel>
    </>
  );
};

export default PasswordInput;
