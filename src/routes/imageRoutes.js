const express = require("express");

const router = express.Router();

const { createImage } = require("../controllers/imageController");
const { createImageInput, validate } = require("../middlewares/validation");

router.route("/").post(createImageInput(), validate, createImage);

module.exports = router;
