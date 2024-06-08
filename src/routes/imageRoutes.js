const express = require("express");

const router = express.Router();

const {
  createImage,
  getAllImages,
  getImageById,
  updateImage,
  deleteImage,
} = require("../controllers/imageController");
const {
  createImageInput,
  validate,
  imageIdParam,
} = require("../middlewares/validation");

router
  .route("/")
  .post(createImageInput(), validate, createImage)
  .get(getAllImages);

router
  .route("/:id")
  .all(imageIdParam(), validate)
  .get(getImageById)
  .put(updateImage)
  .delete(deleteImage);

module.exports = router;
