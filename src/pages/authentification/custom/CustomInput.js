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
  setEmail,
  error,
  sx,
}) => {
  return (
    <>
      <InputLabel sx={LabelStyle}>{topLabel}</InputLabel>
      <InputBase
        onChange={setEmail}
        sx={
          error.emailError
            ? { ...InputStyleError, ...sx }
            : { ...InputStyle, ...sx }
        }
        label={topLabel}
        placeholder={placeholder}
        type={type}
      />
      <InputLabel sx={BottomLabelStyle} error={error.emailError}>
        {error.emailError ? error.message : bottomLabel}
      </InputLabel>
    </>
  );
};

export default CustomInput;
