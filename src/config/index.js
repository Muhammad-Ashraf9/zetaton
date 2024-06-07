const dotenv = require("dotenv");
const path = require("path");
dotenv.config({
  path: path.join(__dirname, "..", "..", ".env"),
});

const db = require("./firebase");

module.exports = {
  PORT: process.env.PORT,
  db,
  IMAGES_COLLECTION: "images",
};
