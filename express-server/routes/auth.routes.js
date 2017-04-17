const router = require('express').Router();
const authCtrl = require('../controllers/auth.controller');

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Auth route works'
    });
});

router.post('/login', authCtrl.login);
router.post('/signup', authCtrl.signup);

module.exports = router;