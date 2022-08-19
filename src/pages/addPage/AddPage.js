import { useFormik } from "formik";
import { useState } from "react";

import { AddContactInfo } from "components/addContanctInfo/AddContactInfo";
import { AddDescription } from "components/addDescription/AddDescription";
import { AddDetails } from "components/addDetails/AddDetails";
import { CustomButton } from "UI/button/CustomButton";
import { Text } from "UI/text/Text";
import { ValidationSchema } from "./validationAddPage";
import { UploadButton } from "components/uploadButton/UploadButton";
import { AddPohoto } from "components/addPhoto/AddPhoto";
import { sizeImageValidation, typeImageValidation } from "helper/Constants";

import AddPageStyle, { addTitle, previewBtn, publishBtn } from "./AddPageStyle";

export const AddPage = () => {
  const [isVisible, setIsVisible] = useState(new Array(9).fill(false));

  const [photoErrorMessage, setPhotoErrorMessage] = useState("");

  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      title: "",
      category: "",
      price: "",
      images: new Array(9).fill(undefined),
      description: "",
      location: "",
      phoneNumber: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: () => {
      console.log("values", formik.values);
      // formik.resetForm();
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
          titleTouched={formik.touched.title}
          priceValue={formik.values.price}
          priceError={formik.errors.price}
          categoryValue={formik.values.category}
          onChange={formik.handleChange}
          categoryError={formik.errors.category}
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
              {formik.initialValues.images.map((image, i) => (
                <div key={i}>
                  {isVisible[i] ? (
                    <AddPohoto
                      file={formik.values.images[i]}
                      visible={(val) => {
                        let arr = [...isVisible];
                        arr[i] = val;
                        setIsVisible([...arr]);
                      }}
                      error={photoErrorMessage}
                    />
                  ) : (
                    <UploadButton
                      type="file"
                      name="photo"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        console.log("file", file);
                        if (!typeImageValidation(file.type)) {
                          setPhotoErrorMessage("Unsupported Format");
                        }
                        if (sizeImageValidation(file.size)) {
                          console.log("size", file.size);
                          setPhotoErrorMessage(
                            "File size is greater than maximum limit"
                          );
                        }
                        if (photoErrorMessage.length === 0) {
                          const reader = new FileReader();
                          reader.onload = () => {
                            const base64String = reader.result;
                            formik.setFieldValue(`images[${i}]`, base64String);
                            let arr = [...isVisible];
                            arr[i] = true;
                            setIsVisible([...arr]);
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
            {formik.errors.images ? (
              <div className="error">{formik.errors.images}</div>
            ) : null}
          </div>
        </div>

        <AddDescription
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.errors.description}
        />

        <AddContactInfo
          locationValue={formik.values.location}
          onChange={formik.handleChange}
          locationError={formik.errors.location}
          phoneValue={formik.values.phoneNumber}
          phoneError={formik.errors.phoneNumber}
        />

        <div className="add-page__bottom-btns">
          <CustomButton variant="outlined" sx={previewBtn}>
            Preview
          </CustomButton>

          <CustomButton variant="text" sx={publishBtn} type="submit">
            Publish
          </CustomButton>
        </div>
      </form>

      <style jsx>{AddPageStyle}</style>
    </div>
  );
};
