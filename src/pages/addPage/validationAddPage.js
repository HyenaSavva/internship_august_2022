import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  category: Yup.string().required("Choose a category"),
  price: Yup.string().required("Name your price"),
  images: Yup.array().test(
    "images",
    "Please upload minimum 5 photos",
    function (images) {
      console.log("images", images);
      return images.filter((image) => image !== undefined).length > 4;
    }
  ),
  description: Yup.string().min(100).required(),
  location: Yup.string().required("Required"),
  phoneNumber: Yup.number()
    .min(12, "Minimum 12 characters")
    .required("Required"),
});
