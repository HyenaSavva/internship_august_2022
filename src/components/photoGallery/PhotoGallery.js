import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";

import { itemData } from "mockData/photoGalleryData";
import { CustomButton } from "UI/button/CustomButton";
import { Modal } from "components/common/modal/Modal";

import { imageListStyles, showBtn } from "./PhotoGalleryStyle";
import PhotoGalleryStyle from "./PhotoGalleryStyle";

const getSrcSet = (image, size, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
};

export default function PhotoGalery() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <div className="photo-galery">
      <ImageList sx={imageListStyles} variant="quilted" cols={4} gap={30}>
        {itemData.map((item, index) => (
          <ImageListItem
            key={`${item.img}-${index}`}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...getSrcSet(item.img, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <CustomButton
        variant="outlined"
        startIcon={<AppsRoundedIcon />}
        sx={showBtn}
        onClick={handleClick}
      >
        Show all photos
      </CustomButton>

      {isOpen && (
        <Modal
          open={(open) => {
            setIsOpen(open);
          }}
        />
      )}

      <style jsx>{PhotoGalleryStyle}</style>
    </div>
  );
}
