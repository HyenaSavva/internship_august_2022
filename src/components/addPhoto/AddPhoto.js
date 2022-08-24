import { useState } from "react";
import {
  Dialog,
  IconButton,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import AddPhotoStyle, { closeBtn, dialog } from "./AddPhotoStyle";

export const AddPohoto = ({ file, removePhoto, error, removeError }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {error ? (
        <Dialog
          sx={dialog}
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogActions>
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
                removePhoto();
                removeError();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </DialogActions>

          <DialogTitle id="alert-dialog-title">Error</DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {error}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      ) : (
        <div className="add-photo__image">
          <img alt="photo" src={file} className="add-photo" />
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            sx={closeBtn}
            onClick={() => {
              removePhoto();
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </div>
      )}

      <style jsx>{AddPhotoStyle}</style>
    </>
  );
};
