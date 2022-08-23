import { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import { useParams } from "react-router-dom";

import { Description } from "components/description/Description";
import PhotoGalery from "components/photoGallery/PhotoGallery";
import { CustomButton } from "UI/button/CustomButton";
import { Text } from "UI/text/Text";
import { Seller } from "components/seller/Seller";
import { Location } from "components/location/Location";
import { ListingMessage } from "components/listingMessage/ListingMessage";
import { ShareButton } from "UI/button/ShareButton";
import { getListingById } from "helper/Constants";

import ListingPageStyle, {
  shareBtn,
  propertyTitle,
  propertyPrice,
  purchaseBtn,
  favoriteBtn,
} from "./ListingPageStyle";
import { primaryBtn } from "UI/button/CustomButtonStyle";

export const ListingPage = () => {
  const params = useParams();

  console.log("params", params);

  const [listingInfo, setListingInfo] = useState({});

  useEffect(() => {
    if (params.id) {
      const fetchData = async () => {
        const response = await getListingById(params.id);
        console.log("response", response);
        if (response) {
          setListingInfo(response.data);
        }
      };

      fetchData();
    }
  }, []);

  console.log("listingInfo", listingInfo);

  return (
    <>
      <div className="listing-page">
        <PhotoGalery from="listing-page" images={listingInfo.images} />

        <div className="listing-page__top-details">
          <div className="listing-page__title-price">
            <Text variant="h5" sx={propertyTitle}>
              {listingInfo.title}
            </Text>

            <Text variant="h5" sx={propertyPrice}>
              {listingInfo.price} lei
            </Text>
          </div>

          <ShareButton sx={shareBtn} />
        </div>

        <div className="listing-page__middle-details">
          <Description descriptionStyles="listing-page__description">
            {listingInfo.description}
          </Description>

          <div className="listing-page__seller-btns">
            <Seller className="listing-page__seller" />

            <div className="listing-page__btns">
              <CustomButton
                variant="contained"
                sx={{ ...primaryBtn, ...purchaseBtn }}
              >
                Purchase
              </CustomButton>

              <IconButton sx={favoriteBtn}>
                <FavoriteBorderIcon />
              </IconButton>
            </div>
          </div>
        </div>

        <div className="listing-page__bottom-details">
          <Location>{listingInfo.location}</Location>

          <ListingMessage />
        </div>
      </div>

      <style jsx>{ListingPageStyle}</style>
    </>
  );
};
