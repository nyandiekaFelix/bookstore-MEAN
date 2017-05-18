const router = require('express').Router();
const passport = require('passport');

const userCtrl = require('../controllers/user.controller');
const passportService = require('../config/passport');

const requireAuth = passport.authenticate('jwt', { session: false });

router.get('/', userCtrl.getAllUsers); // only admin

router.route('/:userId')
    .get(requireAuth, userCtrl.getOneUser)
    .put(requireAuth, userCtrl.updateUser)
    .delete(requireAuth, userCtrl.deleteUser);

module.exports = router;