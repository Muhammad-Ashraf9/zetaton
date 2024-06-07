const { db, IMAGES_COLLECTION } = require("../config");

const create = async (data) => {
  try {
    const docRef = await db.collection(IMAGES_COLLECTION).add(data);
    return docRef.id;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  create,
};
