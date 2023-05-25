const jwt = require('jsonwebtoken');

const generateJwt = (uid, name) => {
    return new Promise((resolve, reject) => {
        const payload = { uid, name };

        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '1h',
        }, (error, token) => {

            if (!error) {
                resolve(token);
            }
            console.error(err);
            reject('Error Generating Token');
        });
    });
}

module.exports = {
    generateJwt,
}