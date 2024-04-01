const express = require("express");
const adminMiddleware = require("../middlerwares/admin-middelware");
const adminController = require("../controllers/admin-controller");
const authMiddleware = require("../middlerwares/auth-user-middleware");
const router = express.Router();

router.route('/users').get(authMiddleware,adminController.getAllUsers);
router.route('/contacts').get(authMiddleware,adminController.getAllcontacts);
router.route('/users/delete/:id').delete(authMiddleware,adminMiddleware,adminController.deleteUserById);

router.route('/users/:id').
get(adminMiddleware,adminController.getUserById);

router.
route('/users/update/:id').
patch(adminMiddleware,adminController.updateUserById);

module.exports = router;
