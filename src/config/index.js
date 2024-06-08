// const dotenv = require("dotenv");
// const path = require("path");
// dotenv.config({
//   path: path.join(__dirname, "..", "..", ".env"),
// });

const db = require("./firebase");

module.exports = {
  PORT: process.env.PORT || 3000,
  shareaholicAPIKey: process.env.SHAREAHOLIC_API_KEY,
  db,
  IMAGES_COLLECTION: "images",
};
