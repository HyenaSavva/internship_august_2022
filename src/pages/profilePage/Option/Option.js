import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import OptionStyle, { optionStyle, summary, details } from "./OptionStyle";
import { useState } from "react";

const Option = ({
  children,
  childStyle,
  subTitle,
  optionName,
  disabled,
  clickHandler,
}) => {
  const [isClosed, setIsClosed] = useState(true);

  const buttonHandler = (event) => {
    clickHandler(event);
    setIsClosed((prev) => !prev);
  };

  return (
    <>
      <MuiAccordion disableGutters elevation={0} square sx={optionStyle}>
        <MuiAccordionSummary
          sx={summary}
          disabled={isClosed ? disabled : false}
          onClick={buttonHandler}
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
          {children}
        </MuiAccordionDetails>
      </MuiAccordion>
      <style jsx>{OptionStyle}</style>
    </>
  );
};
export default Option;
