const { create } = require("../services/firebaseService");

exports.createImage = async (req, res, next) => {
  try {

    const { title, url } = req.body;
    const id = await create({ title, url });

    res.status(201).json({ id });
  } catch (error) {
    next(error);
  }
};
