import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";

const Input = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-root": {
    height: "42px",
    border: "1px solid #D0D5DD",
    borderRadius: 8,
    marginBottom: "1rem",
    padding: "0 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),

    "&:focus": {
      borderColor: "#0356E8",
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    },
  },
}));

const Label = styled(InputLabel)(({ theme, label }) => ({
  "& .MuiFormLabel-root": {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '22px',
    color: '#98a2b3',
    margin: '0'
  },
}));

const CustomInput = ({ label, id, placeholder }) => {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} placeholder={placeholder} />
    </>
  );
};

export default CustomInput;
