const jwt = require("jsonwebtoken")

const config = require("../configs/config.json")

const generateToken = (data, expiresIn) => {
    if (!expiresIn) expiresIn = "30d"
    return jwt.sign(data, config.app.secret, { expiresIn })
}

module.exports = generateToken