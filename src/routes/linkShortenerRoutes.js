const express = require("express");
const { shortenLink } = require("../controllers/linkShortenerController");

const router = express.Router();

router.post("/", shortenLink);

module.exports = router;
