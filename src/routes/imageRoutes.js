const express = require("express");

const router = express.Router();

const {
  createImage,
  getAllImages,
  getImageById,
  updateImage,
} = require("../controllers/imageController");
const { createImageInput, validate } = require("../middlewares/validation");

router
  .route("/")
  .post(createImageInput(), validate, createImage)
  .get(getAllImages);

router.route("/:id").get(getImageById).put(updateImage);

module.exports = router;
