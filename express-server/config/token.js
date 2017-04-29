const jwt = require('jsonwebtoken');
const config = require('./main.js');


// require('passport-local');


module.exports = {
    generateJWT: (user) => {
        return jwt.sign(user, config.secret, {
            expiresIn: 60 * 60 * 24
        });
    },

    /*ensureAuthenticated: (req, res, next) => {
        if (!req.header('Authorization')) {
            return res.status(401).send({
                message: 'The request made does not have an authorization header'
            });
        }

        const id_token = req.header('Authorization').split(' ')[1];
        let payload = null;

        try{
            payload = jwt.verify(id_token, config.secret);
        }
        catch (err) {
            return res.status(401).send({
                message: err.message
            });
        }

        if (payload.expiresIn <= Date.now()) {
            return res.status(401).json({
                message: 'Token has expired'
            });
        }
    }*/
};