import { useState } from "react";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import OptionStyle, {
  optionStyle,
  summary,
  details,
  button,
} from "./OptionStyle";
import { CustomButton } from "../../../UI/button/CustomButton";

const Option = ({
  children,
  childStyle,
  subTitle,
  optionName,
  disabled,
  clickHandler,
  inputHandler,
}) => {
  const [isClosed, setIsClosed] = useState(true);

  const editHandler = (event) => {
    clickHandler(event);
    setIsClosed((prev) => !prev);
  };

  const saveButtonHandler = (e) => {
    e.preventDefault();
    try {
      inputHandler();
    } catch (e) {
      console.log('Inputs with problems');
    }
  };
  return (
    <>
      <MuiAccordion disableGutters elevation={0} square sx={optionStyle}>
        <MuiAccordionSummary
          sx={summary}
          disabled={isClosed ? disabled : false}
          onClick={editHandler}
        >
          <div className="info">
            <label>{optionName}</label>
            <p>{subTitle}</p>
          </div>
          <div className="summary">
            <div className="edit">{isClosed ? "Edit" : "Close"}</div>
          </div>
        </MuiAccordionSummary>
        <MuiAccordionDetails sx={{ ...details, ...childStyle }}>
          <form>{children}</form>
          <CustomButton sx={button} component={""} onClick={saveButtonHandler}>
            Save
          </CustomButton>
        </MuiAccordionDetails>
      </MuiAccordion>
      <style jsx>{OptionStyle}</style>
    </>
  );
};
export default Option;
