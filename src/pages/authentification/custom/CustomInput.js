import InputLabel from "@mui/material/InputLabel";
import InputBase from "@mui/material/InputBase";

import {
  LabelStyle,
  BottomLabelStyle,
  InputStyle,
  InputStyleError,
} from "./CustomStyles";

const CustomInput = ({
  topLabel,
  bottomLabel,
  placeholder,
  type,
  setEnteredValue,
  error,
  id,
  multiline,
  sx,
}) => {
  console.log("sx", sx);
  return (
    <>
      <InputLabel sx={LabelStyle}>{topLabel}</InputLabel>
      <InputBase
        onChange={(event) => setEnteredValue(event.target.value)}
        sx={error.status ? InputStyleError : { ...InputStyle, ...sx }}
        id={id}
        placeholder={placeholder}
        type={type}
        multiline={multiline}
      />
      <InputLabel sx={BottomLabelStyle} error={error.valueError}>
        {error.valueError ? error.message : bottomLabel}
      </InputLabel>
    </>
  );
};

export default CustomInput;
