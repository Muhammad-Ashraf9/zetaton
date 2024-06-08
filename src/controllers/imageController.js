const { IMAGES_COLLECTION } = require("../config");
const {
  create,
  getAll,
  getById,
  update,
} = require("../services/firebaseService");

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

exports.getAllImages = async (req, res, next) => {
  try {
    const images = await getAll(IMAGES_COLLECTION);

    res.status(200).json(images);
  } catch (error) {
    next(error);
  }
};

exports.getImageById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      const error = new Error("Image id is required");
      error.statusCode = 400;
      throw error;
    }

    const image = await getById(IMAGES_COLLECTION, id);

    res.status(200).json(image);
  } catch (error) {
    next(error);
  }
};

exports.updateImage = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { title, url, description } = req.body;

    if (!id) {
      const error = new Error("Image id is required");
      error.statusCode = 400;
      throw error;
    }

    const image = {
      title,
      url,
      description: description || "",
      updatedAt: new Date(),
    };

    await update(IMAGES_COLLECTION, id, image);

    res.status(200).json({ message: "Image updated successfully" });
  } catch (error) {
    next(error);
  }
};
