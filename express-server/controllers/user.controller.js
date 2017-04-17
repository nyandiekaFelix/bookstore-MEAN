const User = require('../models/user.model.js');

module.exports = {

    getAllUsers: (req, res) => {
        User.find((err, users) => {
            if (err) {
                res.json(err);
            }
            res.status(201).json(users);
        });
    },

    getOneUser: (req, res) => {
        User.findById(req.params.userId, (err, user) => {
            if (err) {
                res.status(404).send({
                    message: "Could not get user's profile details"
                });
            }
            res.status(201).json(user);
        });
    },

    updateUser: (req, res) => {
        User.findById(req.user, (err, user) => {
            if (!user) {
                return res.status(400).send({
                    message: 'User not found'
                });
            }

            user.username = req.body.username || user.username;
            user.email = req.body.email || user.email;
            
            user.save((err) => {
                res.status(200).send({
                    message: 'Profile updated successfully'
                });
            });
        });
    }
};