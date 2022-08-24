import InputLabel from "@mui/material/InputLabel";
import InputBase from "@mui/material/InputBase";

import {
  LabelStyle,
  BottomLabelStyle,
  InputStyle,
  InputStyleError,
} from "./CustomInputStyle";


const CustomInput = ({
  topLabel,
  bottomLabel,
  placeholder,
  type,
  setEnteredValue,
  error,
  styles,
  items,
  inputProps,
}) => {
  return (
    <>
      <InputLabel sx={LabelStyle}>{topLabel}</InputLabel>
      <InputBase
        inputProps={inputProps}
        onChange={(e) => {
          setEnteredValue(e.target.value);
        }}
        sx={
          error.inputError
            ? { ...InputStyleError }
            : { ...InputStyle, ...styles }
        }
        label={topLabel}
        placeholder={placeholder}
        type={type}
      />
      {items}
      <InputLabel sx={BottomLabelStyle} error={error.inputError}>
        {error.inputError ? error.message : bottomLabel}
      </InputLabel>
    </>
  );
};

export default CustomInput;
