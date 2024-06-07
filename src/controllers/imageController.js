const { IMAGES_COLLECTION } = require("../config");
const { create } = require("../services/firebaseService");

exports.createImage = async (req, res, next) => {
  try {
    const { title, url, description } = req.body;
    
    const image = {
      title,
      url,
      description: description || "",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const id = await create(IMAGES_COLLECTION, image);

    res.status(201).json({ id, message: "Image created successfully" });
  } catch (error) {
    next(error);
  }
};
