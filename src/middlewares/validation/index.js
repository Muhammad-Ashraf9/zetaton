const { createImageInput, imageIdParam } = require("./image/imageValidations");
const { createShortLinkInput } = require("./linkShortnerValidations");
const validate = require("./validator");

module.exports = {
  createImageInput,
  imageIdParam,
  validate,
  createShortLinkInput,
};
