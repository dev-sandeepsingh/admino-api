const { createUserCore } = require('./user/index.js');
const { createFirestoreCore } = require('./firestore/index.js');

const createCore = ({ sequelize }) => {
  const userCore = createUserCore({ sequelize });
  const firestoreCore = createFirestoreCore();

  return {
    userCore,
    firestoreCore,
  };
};

module.exports = { createCore };
