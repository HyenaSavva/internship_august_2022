import { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import useWindowSize from "hooks/useWindowSize";
import { appTheme } from "themes/themes";

const getSrcSet = (image, size, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
};

export const CustomImageList = ({ sx, images, isModal, from }) => {
  const size = useWindowSize();
  const [imageListSettings, setImageListSettings] = useState({
    columns: "",
    gap: "",
  });

  const modelListImages = new Array(9).fill({
    img: "",
    title: "Property Picture",
  });

  const imagesToDisplay = modelListImages.map((item, index) => ({
    ...item,
    img: images[index],
    rows: index === 0 ? 2 : 1,
  }));

  const getSpecificImages = (images, count) => {
    return images?.slice(0, count);
  };

  useEffect(() => {
    if (size.width < appTheme.breakpoints.values.tablet) {
      setImageListSettings({ ...imageListSettings, columns: 2, gap: 4 });
    } else if (
      size.width > appTheme.breakpoints.values.tablet &&
      size.width < appTheme.breakpoints.values.laptop
    ) {
      setImageListSettings({ ...imageListSettings, columns: 2, gap: 12 });
    } else if (
      size.width > appTheme.breakpoints.values.laptop &&
      size.width < appTheme.breakpoints.values.desktop
    ) {
      setImageListSettings({
        ...imageListSettings,
        columns: isModal ? 2 : 3,
        gap: 24,
      });
    } else if (size.width > appTheme.breakpoints.values.desktop) {
      setImageListSettings({
        ...imageListSettings,
        columns: isModal ? 2 : 4,
        gap: 30,
      });
    }
  }, [size.width]);
  return (
    <>
      {images && (
        <ImageList
          sx={{ ...sx }}
          variant="quilted"
          cols={+imageListSettings.columns}
          gap={+imageListSettings.gap}
        >
          {from === "preview-page"
            ? getSpecificImages(imagesToDisplay, 3).map((item, index) => (
                <ImageListItem
                  key={`${item.img}-${index}`}
                  cols={item.cols || 2}
                  rows={item.rows || 1}
                  style={{ height: index === 0 ? "430px" : "200px" }}
                >
                  <img src={`${item.img}`} alt={item.title} loading="lazy" />
                </ImageListItem>
              ))
            : getSpecificImages(images, 5).map((item, index) => (
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
      )}
    </>
  );
};
