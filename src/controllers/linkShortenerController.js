const { shortenLink } = require("../services/linkShortenerService");

exports.shortenLink = async (req, res, next) => {
  try {
    const { url } = req.body;
    console.log("url :>> ", url);
    const shortenedURL = await shortenLink(url);
    //change headers to application/vnd.api+json; charset=utf-8
    // res.setHeader("Content-Type", "application/vnd.api+json; charset=utf-8");
    res.json({ message: "Link shortened", url: shortenedURL });
  } catch (error) {
    next(error);
  }
};
