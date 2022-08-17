import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import OptionStyle, { summary, details } from "./OptionStyle";

const Option = ({ children, sx, subTitle, optionName}) => {
  return (
    <>
      <MuiAccordion disableGutters elevation={0} square sx={sx}>
        <MuiAccordionSummary sx={summary}>
          <div className="summary">
            <div className="info">
              <label>{optionName}</label>
              <p>{subTitle}</p>
            </div>
            <div className="edit">Edit</div>
          </div>
        </MuiAccordionSummary>
        <MuiAccordionDetails sx={details}>
          <label>{children}</label>
        </MuiAccordionDetails>
      </MuiAccordion>
      <style jsx>{OptionStyle}</style>
    </>
  );
};
export default Option;
