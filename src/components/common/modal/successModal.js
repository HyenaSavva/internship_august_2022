import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { Text } from "UI/text/Text";
import { CustomButton } from "UI/button/CustomButton";
import { defaultBtn, primaryBtn } from "UI/button/CustomButtonStyle";
import welcome from "assets/images/welcome.png";

import {
  addBtn,
  btnsWrapper,
  homeBtn,
  modal,
  style,
} from "./successModalStyle";

export const SuccessModal = ({ closeModal }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={modal}
      >
        <Box sx={style}>
          <img
            src={welcome}
            style={{ marginBottom: "48px" }}
            alt="Successfully add"
          />

          <Text id="modal-modal-title" variant="h6" component="h2">
            Awesome! Your listing has been sent for approval.
          </Text>

          <Text id="modal-modal-description" variant="body1" sx={{ mt: 2 }}>
            Admins will check your listing to make sure everything is okay.
          </Text>

          <Box sx={btnsWrapper}>
            <CustomButton
              sx={{ ...primaryBtn, ...homeBtn }}
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </CustomButton>

            <CustomButton
              sx={{ ...defaultBtn, ...addBtn }}
              onClick={() => {
                setOpen(false);
                closeModal();
              }}
            >
              Add new listing
            </CustomButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
