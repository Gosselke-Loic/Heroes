const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    const authorization = req.get('authorization');

    let token = null;
    if(!authorization) {
        res.status(401).json({ error: "No authorization" })
    } else if(authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7);
    }

    const decodedToken = jwt.verify(token, process.env.SECRET);
    if(!token || !decodedToken.id) {
        res.status(401).json({ error: "token invalid or missing" })
    };

    next();
}