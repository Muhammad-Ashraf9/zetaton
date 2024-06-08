//express-validator

const { body } = require("express-validator");

const createShortLinkInput = () => [
  body("url").isURL().withMessage("URL must be a valid URL"),
];

module.exports = {
  createShortLinkInput,
};
