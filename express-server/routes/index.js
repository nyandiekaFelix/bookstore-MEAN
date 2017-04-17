const router = require('express').Router();
const authRoutes = require('../routes/auth.routes');
const userRoutes = require('./user.routes');
const booksRoutes = require('./books.routes');

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/books', booksRoutes);

module.exports = router;