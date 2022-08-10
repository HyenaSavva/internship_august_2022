import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";

import { itemData } from "mockData/photoGalleryData";
import { CustomButton } from "UI/button/CustomButton";

const listImageStyles = {
  width: "555px",
  borderRadius: "12px",
  margin: "auto",
};

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function PhotoGalery() {
  return (
    <div>
      <ImageList
        sx={listImageStyles}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData.map((item, index) => (
          <ImageListItem
            key={`${item.img}-${index}`}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <CustomButton variant="outlined" startIcon={<AppsRoundedIcon />}>
        Show all photos
      </CustomButton>
    </div>
  );
}
