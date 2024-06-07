const express = require("express");

const router = express.Router();

const { createImage } = require("../controllers/imageController");

router.route("/").post(createImage);

module.exports = router;
