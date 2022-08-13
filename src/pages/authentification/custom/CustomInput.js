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
  setEnteredEmail,
  setErrorEmail,
  error,
}) => {
  return (
    <>
      <InputLabel sx={LabelStyle}>{topLabel}</InputLabel>
      <InputBase
        onChange={(event) => setEnteredEmail(event.target.value)}
        sx={error.status ? InputStyleError : InputStyle}
        label={topLabel}
        placeholder={placeholder}
        type={type}
      />
      <InputLabel sx={BottomLabelStyle} error={error.status}>
        {error.status ? error.message : bottomLabel}
      </InputLabel>
    </>
  );
};

export default CustomInput;
