const Book = require('../models/books.model');

module.exports = {
    create: (req, res) => {
        return new Book({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price
        })
        .save()
        .then(book => {
            res.status(200).json({
                message: 'Book saved successfully',
                book: book
            });
        })
        .catch(err => {
            return res.status(500).json(err);
        });
    },

    getAllBooks: (req, res) => {
        Book.find({})
            // .populate()
            .then(books => {
                return res.status(200).json(books);
            })
            .catch(err => res.status(500).json(err)); 
    },

    getCategory: (req, res) => {
        Book.findById(req.params.category).exec()
            .then(category => {
                return res.status(200).json(category);
            })
            .catch(err => res.status(500).json(err));
    },
    
    getOneBook: (req, res) => {
        Book.findById(req.params.bookId)
            // .populate()
            .exec()
            .then(book => {
                if (!book) {
                    return res.status(404).json({ message: 'Book not found' });
                }
                return res.status(200).json(book);
            })
            .catch(err => res.status(500).json(err));
    },

    updateBook: (req, res) => {
        Book.findById(req.params.bookId)
            .exec()
            .then((book) => {
                if(!book) {
                    return res.status(404).json({
                        message: 'Book not found'
                    })
                }

                const updatedBook = {
                    title: req.body.title || 
                    book.title,
                    category: req.body.category || 
                    book.category,
                    description: req.body.description ||
                    book.description,
                    price: req.body.price ||
                    book.price
                };

                return Object.assign(book, updatedBook);
            })
            .then(book => {
                return book.save();
            })
            .then(updatedDoc => {
                res.status(200).json({
                    message: 'Book saved successfully',
                    book: updatedDoc
                });
            })
            .catch(err => res.status(500).json(err));
    },
 
    deleteBook: (req, res) => {
        Book.findOneAndRemove(req.params.bookId)
            .exec()
            .then(() => {
                return res.status(200).json({ message: 'Book deleted'});
            })
            .catch(err => res.status(500).json(err));
    }
};
