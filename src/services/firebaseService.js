const { db } = require("../config");

const create = async (collection, data) => {
  try {
    const docRef = await db.collection(collection).add(data);
    return docRef.id;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  create,
};
