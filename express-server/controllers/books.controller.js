const Book = require('../models/books.model');

module.exports = {
    create: (req, res) => {
        const book = new Book({
            // thumbnail: req.body.thumbnail,
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price
        });

        book.save((err) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json({
                message: 'Book saved successfully'
            });
        });
    },

    getAllBooks: (req, res) => {
        Book.find({}, 'ownerId username', (err, books) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json({ books: books });
        }); 
    },

    // getByUser: (req, res) => {

    // },

    getCategory: (req, res) => {
        Book.findById(req.params.category, (err, category) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json({ category: category });
        });
    },
    
    getOneBook: (req, res) => {
        Book.findById(req.params.bookId, (err, book) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json({ book : book });
        });
    },

    updateBook: (req, res, next) => {
        Book.findById(req.params.bookId, (err, book) => {
            if (err) {
                res.status(500).send(err);
            }

            book.thumbnail = req.body.thumbnail || book.thumbnail;
            book.title = req.body.title || book.title;
            book.category = req.body.category || book.category;
            book.description = req.body.description || book.description;
            book.price = req.body.price || book.price;

            book.save((err, book) => {
                if (err) {
                    res.status(500).send(err)
                }

                res.status(200).json({
                    book: book,
                    message: 'Book details updated successfully'
                });
            });
        });
    },

    deleteBook: (req, res) => {}
};
