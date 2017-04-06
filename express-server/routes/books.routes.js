const router = require('express').Router();
const booksCtrl = require('../controllers/books.controller');

router.get('/', (req, res) => {
    res.status(200).send({
        message: 'Books route works'
    });
});

router.post('/upload', booksCtrl.create);

router.get('/all', booksCtrl.getAll);
router.get('/:category', booksCtrl.getCategory);

router.get('/:bookId', booksCtrl.getOne);
router.put('/:bookId', booksCtrl.updateBook);


module.exports = router;

