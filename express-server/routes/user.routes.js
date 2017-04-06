const router = require('express').Router();

const userCtrl = require('../controllers/user.controller.js');

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'User route works'
    });
});

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

router.get('/:userId', userCtrl.getProfile);
router.post('/:userId', userCtrl.updateProfile);

router.get('/:userId/uploads', userCtrl.getUserUploads);

module.exports = router;