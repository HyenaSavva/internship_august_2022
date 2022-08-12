import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";

import { Description } from "components/description/Description";
import PhotoGalery from "components/photoGallery/PhotoGallery";
import { CustomButton } from "UI/button/CustomButton";
import { Text } from "UI/text/Text";
import { Seller } from "components/seller/Seller";
import { Location } from "components/location/Location";
import { ListingMessage } from "components/listingMessage/ListingMessage";
import { ShareButton } from "UI/button/ShareButton";

import ListingPageStyle, {
  shareBtn,
  propertyTitle,
  propertyPrice,
  purchaseBtn,
  favoriteBtn,
} from "./ListingPageStyle";

export const ListingPage = () => {
  return (
    <>
      <div className="listing-page">
        <PhotoGalery />

        <div className="listing-page__top-details">
          <div className="listing-page__title-price">
            <Text variant="h5" sx={propertyTitle}>
              Dreamy Treehouse Above Park City
            </Text>

            <Text variant="h5" sx={propertyPrice}>
              712,123 lei
            </Text>
          </div>

          <ShareButton sx={shareBtn} />
        </div>

        <div className="listing-page__middle-details">
          <Description descriptionStyles="listing-page__description" />

          <div className="listing-page__seller-btns">
            <Seller className="listing-page__seller" />

            <div className="listing-page__btns">
              <CustomButton variant="contained" sx={purchaseBtn}>
                Purchase
              </CustomButton>

              <IconButton sx={favoriteBtn}>
                <FavoriteBorderIcon />
              </IconButton>
            </div>
          </div>
        </div>

        <div className="listing-page__bottom-details">
          <Location />

          <ListingMessage />
        </div>
      </div>

      <style jsx>{ListingPageStyle}</style>
    </>
  );
};
