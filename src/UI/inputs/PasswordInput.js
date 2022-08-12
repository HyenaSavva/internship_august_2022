import { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

import {
  BottomLabelStyle,
  TopLabelStyle,
  InputStyle,
  IconStyle,
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
        error={error}
        sx={InputStyle}
        id="password"
        placeholder={placeholder}
        type={isShown ? "text" : "password"}
        inputProps={{ maxLength: 30 }}
        endAdornment={
          <IconButton onClick={visibilityHandler} sx={IconStyle}>
            {isShown ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        }
      />
      <InputLabel htmlFor={id} sx={BottomLabelStyle} id={id} error={error}>
        {bottomLabel}
      </InputLabel>
    </>
  );
};

export default PasswordInput;
