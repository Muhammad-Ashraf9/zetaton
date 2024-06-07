const { db } = require("../config");

const create = async (collection, data) => {
  try {
    const docRef = await db.collection(collection).add(data);
    return docRef.id;
  } catch (error) {
    throw new Error(error);
  }
};

const getAll = async (collection) => {
  try {
    const snapshot = await db.collection(collection).get();
    console.log("snapshot :>> ", snapshot);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const getById = async (collection, id) => {
  try {
    const doc = await db.collection(collection).doc(id).get();
    if (!doc.exists) {
      throw new Error("Document not found");
    }
    return { id: doc.id, ...doc.data() };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  create,
  getAll,
  getById,
};
