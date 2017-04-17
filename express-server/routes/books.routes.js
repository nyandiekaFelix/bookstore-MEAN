const router = require('express').Router();
const booksCtrl = require('../controllers/books.controller');

router.get('/', booksCtrl.getAllBooks);

router.post('/upload', booksCtrl.create);
router.get('/:userId', booksCtrl.getByUser);
router.get('/:category', booksCtrl.getCategory);

router.route('/:bookId')
    .get(booksCtrl.getOneBook)
    .put(booksCtrl.updateBook)
    .delete(booksCtrl.deleteBook);


module.exports = router;

