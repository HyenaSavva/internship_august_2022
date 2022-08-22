import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate, useLocation } from "react-router-dom";

import { AddContactInfo } from "components/addContanctInfo/AddContactInfo";
import { AddDescription } from "components/addDescription/AddDescription";
import { AddDetails } from "components/addDetails/AddDetails";
import { UploadButton } from "components/uploadButton/UploadButton";
import { AddPohoto } from "components/addPhoto/AddPhoto";
import { CustomButton } from "UI/button/CustomButton";
import { Text } from "UI/text/Text";
import { ValidationSchema } from "./validationAddPage";
import {
  addNewListing,
  sizeImageValidation,
  typeImageValidation,
} from "helper/Constants";

import AddPageStyle, { addTitle } from "./AddPageStyle";
import { defaultBtn, primaryBtn } from "UI/button/CustomButtonStyle";

export const AddPage = () => {
  const [photoErrorMessage, setPhotoErrorMessage] = useState(
    new Array(9).fill("")
  );
  const [isPreview, setIsPreview] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const initialFieldValues = {
    title: "",
    category: "",
    price: "",
    images: new Array(9).fill(undefined),
    description: "",
    location: "",
    phone: "",
  };

  const handlePreviewMode = () => {
    navigate("/preview", { state: { listing: formik.values } });
  };

  const formik = useFormik({
    validateOnChange: false,
    initialValues: state ? state.listingFromPreview : initialFieldValues,
    validationSchema: ValidationSchema,
    onSubmit: async () => {
      if (isPreview) {
        handlePreviewMode();
        return;
      }

      const imagesToSend = formik.values.images.filter((images) => !!images);
      try {
        const response = await addNewListing({
          ...formik.values,
          images: imagesToSend,
        });
        if (response) {
          console.log("data", response);
        }
      } catch (error) {
        console.log("submit error", error);
      }

      formik.resetForm();
      navigate("/");
    },
  });

  return (
    <div className="add-page">
      <Text variant="h5" sx={addTitle}>
        Add new
      </Text>

      <form onSubmit={formik.handleSubmit}>
        <AddDetails
          titleValue={formik.values.title}
          titleError={formik.errors.title}
          priceValue={formik.values.price}
          priceError={formik.errors.price}
          categoryValue={formik.values.category}
          categoryError={formik.errors.category}
          onChange={formik.handleChange}
        />

        <div className="add-page__media">
          <div className="add-page__media__title-subtitle">
            <Text variant="h6">Photos & videos</Text>

            <Text variant="body2">
              Lörem ipsum trede relig, oktig. Tism rallylydnad.
            </Text>
          </div>

          <div className="add-page__media__buttons-wrapper">
            <div className={"add-page__media__buttons"}>
              {formik.values.images.map((image, i) => {
                return (
                  <div key={i}>
                    {image ? (
                      <AddPohoto
                        file={image}
                        removePhoto={() => {
                          formik.setFieldValue(`images[${i}]`, null);
                        }}
                        error={photoErrorMessage[i]}
                        removeError={() => {
                          let arr = [...photoErrorMessage];
                          arr[i] = "";
                          setPhotoErrorMessage(arr);
                        }}
                      />
                    ) : (
                      <UploadButton
                        type="file"
                        name="photo"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (!typeImageValidation(file.type)) {
                            let arr = [...photoErrorMessage];
                            arr[i] = "Unsupported Format";
                            setPhotoErrorMessage(arr);
                          }
                          if (sizeImageValidation(file.size)) {
                            let arr = [...photoErrorMessage];
                            arr[i] = "File size is greater than maximum limit";
                            setPhotoErrorMessage(arr);
                          }
                          if (photoErrorMessage[i].length === 0) {
                            const reader = new FileReader();
                            reader.readAsDataURL(file);
                            reader.onload = () => {
                              formik.setFieldValue(
                                `images[${i}]`,
                                reader.result
                              );
                            };
                          }
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            {formik.errors.images ? (
              <div className="error">{formik.errors.images}</div>
            ) : null}
          </div>
        </div>

        <AddDescription
          value={formik.values.description}
          error={formik.errors.description}
          onChange={formik.handleChange}
        />

        <AddContactInfo
          locationValue={formik.values.location}
          locationError={formik.errors.location}
          phoneValue={formik.values.phone}
          phoneError={formik.errors.phone}
          onChange={formik.handleChange}
        />

        <div className="add-page__bottom-btns">
          <CustomButton
            variant="outlined"
            sx={defaultBtn}
            onClick={() => {
              setIsPreview(true);
            }}
            type="submit"
          >
            Preview
          </CustomButton>

          <CustomButton
            variant="text"
            sx={primaryBtn}
            type="submit"
            onClick={() => {
              setIsPreview(false);
            }}
          >
            Publish
          </CustomButton>
        </div>
      </form>

      <style jsx>{AddPageStyle}</style>
    </div>
  );
};
