const {
  createGetUsersFromFirestore,
} = require('./get-users-from-firestore.js');

const createFirestoreCore = () => {
  const getUsersFromFirestore = createGetUsersFromFirestore();

  return {
    getUsersFromFirestore,
  };
};

module.exports = {
  createFirestoreCore,
};
