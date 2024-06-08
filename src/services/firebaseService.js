const { db } = require("../config");

const create = async (collection, data) => {
  try {
    const docRef = await db.collection(collection).add(data);
    return docRef.id;
  } catch (error) {
    throw error;
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
    throw error;
  }
};

const getById = async (collection, id) => {
  try {
    const doc = await db.collection(collection).doc(id).get();
    if (!doc.exists) {
      console.log("doc.exists :>> ", doc.exists);
      const error = new Error("Document not found");
      error.statusCode = 404;
      throw error;
    }
    return { id: doc.id, ...doc.data() };
  } catch (error) {
    throw error;
  }
};

const update = async (collection, id, data) => {
  try {
    //to get the createdAt field
    const doc = db.collection(collection).doc(id);

    const docData = (await doc.get()).data();

    data.createdAt = docData.createdAt;

    await doc.update({ ...data, updatedAt: new Date() });
  } catch (error) {
    throw error;
  }
};

const remove = async (collection, id) => {
  try {
    await db.collection(collection).doc(id).delete();
  } catch (error) {
    throw error;
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
