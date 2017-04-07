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
                return res.status(500).json({
                    message: err.message
                });
            }
            return res.status(200).send({
                message: 'Book saved successfully'
            });
        });
    },

    getAll: (req, res) => {

    },

    getCategory: (req, res) => {

    },

    getOne: (req, res) => {
        
    },

    updateBook: (req, res) => {

    }
};