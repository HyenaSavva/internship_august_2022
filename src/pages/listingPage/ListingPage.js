import ShareIcon from "@mui/icons-material/Share";

import PhotoGalery from "components/photoGallery/PhotoGallery";
import { CustomButton } from "UI/button/CustomButton";
import { Details, shareBtn } from "./ListingPageStyles";
import ListingPageStyles from "./ListingPageStyles";

export const ListingPage = ({ title }) => {
  return (
    <>
      <div
        className="custom-div"
      >
        <PhotoGalery />

        <Details>
          <h3>Dreamy Treehouse Above Park City{title}</h3>

          <CustomButton variant="text" startIcon={<ShareIcon />} sx={shareBtn}>
            Share
          </CustomButton>

          <h3>712,123 lei</h3>
        </Details>
      </div>
      <style jsx>{ListingPageStyles}</style>
    </>
  );
};
