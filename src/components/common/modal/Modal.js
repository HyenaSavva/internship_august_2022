import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ImageList, ImageListItem } from "@mui/material";

import { ShareButton } from "UI/button/ShareButton";
import { CustomButton } from "UI/button/CustomButton";
import { itemData } from "mockData/photoGalleryData";

import Modalstyle, { modalImageListStyles } from "./ModalStyle";

const setSrc = (image, size, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
};

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
        <ImageList
          sx={modalImageListStyles}
          variant="quilted"
          cols={2}
          gap={30}
        >
          {allImages.map((item, index) => (
            <ImageListItem
              key={`${item.img}-${index}`}
              cols={item.cols || 1}
              rows={1}
            >
              <img
                {...setSrc(item.img, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>

      <style jsx>{Modalstyle}</style>
    </div>
  );
};
