import { LabelStyle, InputStyle } from "./CustomStyle";
import InputLabel from "@mui/material/InputLabel";
import InputBase from '@mui/material/InputBase';


const CustomInput = ({ label, id, placeholder }) => {
  return (
    <>
      <InputLabel sx={LabelStyle}>{label}</InputLabel>
      <InputBase sx={InputStyle} label={label} placeholder={placeholder} />
    </>
  );
};

export default CustomInput;
