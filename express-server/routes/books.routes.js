const router = require('express').Router();
const booksCtrl = require('../controllers/books.controller');

router.get('/', (req, res) => {
    res.status(200).send({
        message: 'Books route works'
    });
});

router.post('/upload', booksCtrl.create);

router.get('/all', booksCtrl.getAllBooks);
// router.get('/all/:user_id', booksCtrl.getByUser);
// router.get('/:category', booksCtrl.getCategory);

// router.get('/:bookId', booksCtrl.getOneBook);
// router.put('/:bookId', booksCtrl.updateBook);


module.exports = router;

