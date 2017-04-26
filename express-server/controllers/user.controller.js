const User = require('../models/user.model');

module.exports = {

    getAllUsers: (req, res) => {
        User.find({}, '-password')
            // .populate('books') -> to return all books posted by users
            .exec()
            .then(users => {
                return res.status(200).json(users);
            })
            .catch(err => res.status(500).json(err));
    },

    getOneUser: (req, res) => {
        User.findById(req.params.userId)
            // .populate('books') 
            .exec()
            .then(user => {
                if (!user) {
                    return res.status(404).json({ message: 'User not found'});
                }
                return res.status(200).json(user);
            })
            .catch(err => res.status(500).json(err));
    },

    updateUser: (req, res) => {
        User.findOneAndUpdate(req.params.userId)
            .exec()
            .then(user => {
                if (!user) {
                    return res.status(404).json({message: 'User not found'});
                }
                return res.status(200).json(user);
            })
            .catch(err => res.status(500).json(err));
    },

    deleteUser: (req, res) => {
        User.findOneAndRemove(req.params.userId)
            .exec()
            .then(() => {
                return res.status(200).json({ message: 'User deleted'});
            })
            .catch(err => res.status(500).json(err));
    }
};