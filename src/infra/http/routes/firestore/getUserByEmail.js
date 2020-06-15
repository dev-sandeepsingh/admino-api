const { toApiResponse } = require('../../utils/response.js');

const createDataFromFirestoreRoute = ({
  router,
  core: {
    firestoreCore: { getUsersFromFirestore },
  },
}) => {
  /**
   * @api {get} /firestore/firestoreUsers Get users from firestore
   * @apiName GetUsers
   * @apiGroup FirestoreUsers
   *
   * @apiSuccess (200) {user} User
   */
  router.get(
    '/firestoreUsers',
    toApiResponse(async () => {
      const userData = await getUsersFromFirestore();
      return { status: 200, data: userData };
    }),
  );

  return router;
};

module.exports = { createDataFromFirestoreRoute };
