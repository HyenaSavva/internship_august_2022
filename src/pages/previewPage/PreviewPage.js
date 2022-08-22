import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";

import PhotoGalery from "components/photoGallery/PhotoGallery";
import { PreviewFooter } from "components/previewFooter/PreviewFooter";
import { Text } from "UI/text/Text";
import { ShareButton } from "UI/button/ShareButton";
import { Description } from "components/description/Description";
import { Seller } from "components/seller/Seller";
import { Location } from "components/location/Location";
import { addNewListing } from "helper/Constants";

import {
  propertyPrice,
  propertyTitle,
  shareBtn,
} from "pages/listingPage/ListingPageStyle";
import PreviewPageStyle from "./PreviewPageStyle";
import { dialog } from "components/addPhoto/AddPhotoStyle";

export const PreviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const [listingReceived, setListingReceived] = useState({
    title: "",
    category: "",
    price: "",
    images: new Array(9).fill(""),
    description: "",
    location: "",
    phone: "",
  });

  const [requestError, setRequestError] = useState("");

  const [open, setOpen] = useState(true);

  useEffect(() => {
    setListingReceived(state.listing);
  }, [state]);

  const images = listingReceived.images?.filter((image) => image);

  const redirectToEditPage = () => {
    navigate("/add-new", { state: { listingFromPreview: listingReceived } });
  };

  const sendToBack = async () => {
    try {
      const response = await addNewListing(listingReceived);
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      setRequestError(error.response.data.title);
    }
  };
  return (
    <>
      {requestError ? (
        <Dialog
          sx={dialog}
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogActions>
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
                setRequestError("");
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </DialogActions>

          <DialogTitle id="alert-dialog-title">Error</DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {requestError}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      ) : (
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

            <div className="preview-page__middle-details">
              <Description descriptionStyles="preview-page__description">
                {state.listing.description}
              </Description>

              <Seller className="preview-page__seller" />
            </div>

            <Location className="preview-page__location">
              {state.listing.location}
            </Location>
          </div>
          <div className="preview-page__footer">
            <PreviewFooter
              redirectToEdit={redirectToEditPage}
              sendToBack={sendToBack}
            />
          </div>
        </>
      )}
      <style jsx>{PreviewPageStyle}</style>
    </>
  );
};
