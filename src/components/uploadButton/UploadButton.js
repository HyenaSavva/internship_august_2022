import AddIcon from "@mui/icons-material/Add";

import { CustomButton } from "UI/button/CustomButton";
import { addBtn, addBtnError, addIcon } from "./UploadButtonStyle";

export const UploadButton = ({ type, name, onChange, error, onClick }) => {
  return (
    <div>
      <CustomButton
        component="label"
        sx={error ? addBtnError : addBtn}
        onClick={onClick}
      >
        <AddIcon sx={addIcon} />

        <input
          type={type}
          accept="video/*, image/png, image/gif, image/jpeg"
          name={name}
          hidden
          onChange={onChange}
        />
      </CustomButton>
    </div>
  );
};
