const User = require('../models/user.model.js');

module.exports = {

    getAllUsers: (req, res, next) => {
        User.find((err, users) => {
            if (err) {
                return next(err);
            }
            res.status(201).json(users);
        });
    },

    getOneUser: (req, res, next) => {
        User.findById(req.params.userId, (err, user) => {
            if (err) {
                return next(err);
            }
            res.status(201).json(user);
        });
    },

    updateUser: (req, res, next) => {
        User.findById(req.user, (err, user) => {
            if (err) {
               return next(err);
            }

            user.username = req.body.username || user.username;
            user.email = req.body.email || user.email;
            
            user.save((err) => {
                if (err) {
                    return next(err);
                }
                res.status(200).send({
                    message: 'Profile updated successfully'
                });
            });
        });
    },

    deleteUser: (req, res) => {}
};