import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import PhotoGalery from "components/photoGallery/PhotoGallery";
import { PreviewFooter } from "components/previewFooter/PreviewFooter";
import { Text } from "UI/text/Text";
import { ShareButton } from "UI/button/ShareButton";
import { Description } from "components/description/Description";
import { Seller } from "components/seller/Seller";
import { Location } from "components/location/Location";

import {
  propertyPrice,
  propertyTitle,
  shareBtn,
} from "pages/listingPage/ListingPageStyle";
import PreviewPageStyle from "./PreviewPageStyle";
import { addNewListing } from "helper/Constants";

export const PreviewPage = () => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  const [listingReceived, setListingReceived] = useState({
    title: "",
    category: "",
    price: "",
    images: new Array(9).fill(""),
    description: "",
    location: "",
    phone: "",
  });

  useEffect(() => {
    setListingReceived(state.listing);
  }, [state]);

  const images = listingReceived.images?.filter((image) => image);
  console.log("images", images);

  const redirectToEditPage = () => {
    navigate("/add-new", { state: { listingFromPreview: listingReceived } });
  };

  const sendToBack = async () => {
    try {
      const response = await addNewListing(listingReceived);
      if (response) {
        console.log("data", response);
      }
    } catch (error) {
      console.log("submit error", error);
    }
  };

  return (
    <>
      <div className="preview-page">
        <PhotoGalery from="preview-page" images={images} />

        <div className="preview-page__top-details">
          <div className="preview-page__title-price">
            <Text variant="h5" sx={propertyTitle}>
              {state.listing.title}
            </Text>

            <Text variant="h5" sx={propertyPrice}>
              {state.listing.price}
            </Text>
          </div>

          <ShareButton sx={shareBtn} />
        </div>
      </div>

      <div className="preview-page__middle-details">
        <Description descriptionStyles="preview-page__description">
          {state.listing.description}
        </Description>

        <Seller className="preview-page__seller" />
      </div>

      <Location className="preview-page__location">
        {state.listing.location}
      </Location>

      <div className="preview-page__footer">
        <PreviewFooter
          redirectToEdit={redirectToEditPage}
          sendToBack={sendToBack}
        />
      </div>

      <style jsx>{PreviewPageStyle}</style>
    </>
  );
};
