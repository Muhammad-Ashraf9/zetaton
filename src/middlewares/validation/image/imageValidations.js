const { body, param } = require("express-validator");

const createImageInput = () => [
  body("url").isURL().withMessage("URL must be a valid URL"),
  body("title")
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage("Title must be a string with a length between 1 and 255"),
  body("description")
    .optional()
    .isString()
    .isLength({ min: 1, max: 255 })
    .withMessage("Description must be a string with a length of 255"),
];

const imageIdParam = () => [
  param("id").trim().notEmpty().withMessage("Image id is required"),
];

module.exports = { createImageInput, imageIdParam };
