import { useState } from "react";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";

import { itemData } from "mockData/photoGalleryData";
import { CustomButton } from "UI/button/CustomButton";
import { Modal } from "components/common/modal/Modal";
import { CustomImageList } from "components/imageList/CustomImageList";

import PhotoGalleryStyle, {
  imageListStyles,
  showBtn,
} from "./PhotoGalleryStyle";

export default function PhotoGalery() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="photo-gallery">
      <CustomImageList sx={{ ...imageListStyles }} images={itemData} />

      <CustomButton
        variant="outlined"
        startIcon={<AppsRoundedIcon />}
        sx={showBtn}
        onClick={handleClick}
        isModal={false}
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
