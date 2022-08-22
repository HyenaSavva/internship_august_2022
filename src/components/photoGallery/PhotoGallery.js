import { useState } from "react";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";

import { CustomButton } from "UI/button/CustomButton";
import { Modal } from "components/common/modal/Modal";
import { CustomImageList } from "components/imageList/CustomImageList";

import PhotoGalleryStyle, {
  imageListStyles,
  showBtn,
} from "./PhotoGalleryStyle";
import { defaultBtn } from "UI/button/CustomButtonStyle";

export default function PhotoGalery({ from, images }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="photo-gallery">
      {images && (
        <CustomImageList
          sx={{ ...imageListStyles }}
          images={images}
          from={from}
        />
      )}

      {from === "listing-page" ? (
        <CustomButton
          variant="outlined"
          startIcon={<AppsRoundedIcon />}
          sx={{ ...defaultBtn, ...showBtn }}
          onClick={handleClick}
          isModal={false}
        >
          Show all photos
        </CustomButton>
      ) : null}

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
