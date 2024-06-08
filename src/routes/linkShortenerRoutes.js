const express = require("express");
const { shortenLink } = require("../controllers/linkShortenerController");
const { createShortLinkInput, validate } = require("../middlewares/validation");

const router = express.Router();

router.post("/", createShortLinkInput(), validate, shortenLink);

module.exports = router;
