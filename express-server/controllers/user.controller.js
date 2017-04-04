const gravatar = require('gravatar');

const config = require('../config/main.js');
const token = require('../config/token.js');
const User = require('../models/user.model.js');

module.exports = {
    signup: (req, res) => {
        User.findOne({ email: req.body.email }, (err, existingUser) => {
            if (existingUser) {
                return res.status(400).json({
                    message: 'Sorry, that email is already registered to another account'
                });
            }

            const avatarUrl = gravatar.url(req.body.email, { s: '200', r: 'x', d: 'retro' }, true);

            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                avatar: avatarUrl
            });

            user.save((err, result) => {
                if (err) {
                    res.status(500).json({
                        message: err.message
                    });
                }
                res.status(201).send({
                    id_token: token.generateJWT(user)
                });
            });
        });
    },

    login: (req, res) => {
        User.findOne({ email: req.body.email }, (err, user) => {
            if (!user) {
                return res.status(401).json({
                    message: 'Wrong email address'
                });
            }

            user.comparePassword(req.body.password, (err, ismatch) => {
                if (!ismatch) {
                    return res.status(401).json({
                        message: 'Wrong password'
                    });
                }

                res.status(201).send({
                    id_token: token.generateJWT(user)
                });
            });
        });
    },

    getProfile: (req, res) => {
        User.findById({ _id: req.params.id }, (err, user) => {
            if (err) {
                res.status(404).send({
                    message: "Could not get user's profile details"
                });
            }
            res.send(user);
        });
    },

    updateProfile: (req, res) => {
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