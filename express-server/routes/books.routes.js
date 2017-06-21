const router = require('express').Router();
const passport = require('passport');

const booksCtrl = require('../controllers/books.controller');
const passportService = require('../config/passport');

const requireAuth = passport.authenticate('jwt', { session: false });

router.route('/')
    .get(booksCtrl.getAllBooks)
    .post(requireAuth, booksCtrl.create);

router.get('/category/:category', booksCtrl.getCategory);

router.route('/:bookId')
    .get(requireAuth, booksCtrl.getOneBook)
    .put(requireAuth, booksCtrl.updateBook)
    .delete(requireAuth, booksCtrl.deleteBook);
    
module.exports = router;

