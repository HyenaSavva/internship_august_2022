import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  category: Yup.string().required("Choose a category"),
  price: Yup.number().required("Name your price"),
  images: Yup.array().test(
    "images",
    "Please upload minimum 5 photos",
    function (images) {
      return images.filter((image) => Boolean(image)).length > 4;
    }
  ),
  description: Yup.string().min(100).required(),
  location: Yup.string().required("Required"),
  phone: Yup.string().min(10, "Minimum 10 characters").required("Required"),
});
