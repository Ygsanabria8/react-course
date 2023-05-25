const { response } = require("express");
const jwt = require('jsonwebtoken');

const tokenValidator = (req, res = response, next) => {

    const token = req.header('Authorization');
    
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'Unathorized'
        });
    }

    try {
        
        const payload = jwt.verify(token, process.env.SECRET_JWT_SEED);
        req.uid = payload.uid;
        req.name = payload.name;

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'InvalidToken'
        });
    }

    next();
}

module.exports = {
    tokenValidator,
}