import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { ShareButton } from "UI/button/ShareButton";
import { CustomButton } from "UI/button/CustomButton";
import { CustomImageList } from "components/imageList/CustomImageList";
import { itemData } from "mockData/photoGalleryData";

import Modalstyle, { modalImageListStyles } from "./ModalStyle";

export const Modal = ({ open }) => {
  const allImages = JSON.parse(JSON.stringify(itemData));

  allImages.forEach((item, index) => {
    if (index % 3 === 0) {
      item.cols = 2;
    }
  });

  const handleClose = () => open(false);

  return (
    <div className="modal">
      <div className="modal__header">
        <IconButton onClick={handleClose}>
          <ArrowBackIosIcon />
        </IconButton>

        <div className="modal__right-btns">
          <ShareButton />

          <CustomButton startIcon={<FavoriteBorderIcon />}>Save</CustomButton>
        </div>
      </div>

      <div className="modal-images">
        <CustomImageList
          sx={modalImageListStyles}
          images={allImages}
          isModal={true}
        />
      </div>

      <style jsx>{Modalstyle}</style>
    </div>
  );
};
