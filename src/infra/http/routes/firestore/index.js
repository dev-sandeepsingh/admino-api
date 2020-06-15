const { Router } = require('express');
const { createDataFromFirestoreRoute } = require('./getUserByEmail.js');

const createFirestoreRoute = ({ core }) => {
  const router = new Router();
  createDataFromFirestoreRoute({ router, core });
  return router;
};

module.exports = { createFirestoreRoute };
