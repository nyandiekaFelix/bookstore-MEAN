const router = require('express').Router();

const userCtrl = require('../controllers/user.controller');

router.get('/', userCtrl.getAllUsers);

router.route('/:userId')
    .get(userCtrl.getOneUser)
    .put(userCtrl.updateUser)
    .delete(userCtrl.deleteUser);

module.exports = router;