const router = require('express').Router();
const userRoutes = require('./user.routes');
const booksRoutes = require('./books.routes')

router.use('/user', userRoutes);
router.use('/books', booksRoutes);

module.exports = router;