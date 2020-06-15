const { Datastore } = require('@google-cloud/datastore');

const { projectId, keyFilename } = require('../../config.js');

const createGetUsersFromFirestore = () => {
  const getUsersFromFirestore = async () => {
    const datastore = new Datastore({
      projectId,
      keyFilename,
    });
    const query = datastore.createQuery('users').limit(10);

    const userData = await datastore.runQuery(query);

    return userData[0];
  };
  return getUsersFromFirestore;
};

module.exports = { createGetUsersFromFirestore };
