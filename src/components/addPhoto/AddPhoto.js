import { useState } from "react";
import { Alert, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import AddPhotoStyle from "./AddPhotoStyle";

export const AddPohoto = ({ file, visible, error }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {error ? (
        <Collapse sx={{ width: "100%", zIndex: "100" }} spacing={2} in={open}>
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  visible(false);
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {error}
          </Alert>
        </Collapse>
      ) : (
        <div>
          <img alt="photo" src={file} className="add-photo" />
        </div>
      )}

      <style jsx>{AddPhotoStyle}</style>
    </>
  );
};
