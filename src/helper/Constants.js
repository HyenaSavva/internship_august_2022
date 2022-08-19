export const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png",
];

export const typeImageValidation = (type) => {
  return SUPPORTED_FORMATS.includes(type);
};

export const sizeImageValidation = (size) => {
  if (size) {
    return size / 1000 > 1000;
  }
};
