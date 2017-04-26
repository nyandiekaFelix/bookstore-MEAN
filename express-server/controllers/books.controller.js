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
                message: 'Book saved successfully',
                book: book
            });
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
            .populate()
            .exec()
            .then(book => {
                return res.status(200).json(book);
            })
            .catch(err => res.status(500).json(err));
    },

    updateBook: (req, res) => {
        Book.findOneAndUpdate(req.params.bookId)
            .exec()
            .then(book => {
                if(!book) {
                    return res.status(404).json({ message: 'Book not found' });
                }
                return res.status(200).json(book);
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
