const jwt = require("jsonwebtoken")

const User = require("../models/User")
const BlackList = require("../models/BlackList")

const config = require("../configs/config.json")

const isUserLoggedIn = async (req, res, next) => {
    try {

        const token = req.headers.authorization?.split(" ")[1]

        const decryptedToken = jwt.verify(token, config.secret)
        const userInformation = await User.findByPk(decryptedToken.id)
        const isTokenBlackList = await BlackList.findOne({ where: { token: token } })

        if (
            userInformation
            && !isTokenBlackList
            && decryptedToken.session == userInformation.session
        ) {

            req.user = userInformation
            req.user.token = token

            next()

        } else res.status(409).json({ err: 2000 })

    } catch (error) {

        res.status(401).json({ err: 2001 })

    }
}

const isUserNotLoggedIn = async (req, res, next) => {
    try {

        const token = req.headers.authorization?.split(" ")[1]

        const decryptedToken = jwt.verify(token, config.secret)
        const userInformation = await User.findByPk(decryptedToken.id)
        const isTokenBlackList = await BlackList.findOne({ where: { token: token } })

        if (
            userInformation
            && !isTokenBlackList
            && decryptedToken.session == userInformation.session
        ) {

            res.status(403).json({ err: 2002 })

        } else res.status(401).json({ err: 2000 })

    } catch (error) {

        next()

    }
}

const isUserOwner = (req, res, next) => {
    const accessedRanks = [
        'owner',
        'developer'
    ]

    if (!accessedRanks.includes(req.user.userRank)) return res.status(403).json({ err: 2003 })

    next()
}

const isUserAdmin = (req, res, next) => {
    const accessedRanks = [
        'owner',
        'developer',
        'admin',
    ]

    if (!accessedRanks.includes(req.user.userRank)) return res.status(403).json({ err: 2003 })

    next()
}

const isUserSupporter = (req, res, next) => {
    const accessedRanks = [
        'owner',
        'developer',
        'admin',
        'supporter'
    ]

    if (!accessedRanks.includes(req.user.userRank)) return res.status(403).json({ err: 2003 })

    next()
}

const isUserEditor = (req, res, next) => {
    const accessedRanks = [
        'owner',
        'developer',
        'editor'
    ]

    if (!accessedRanks.includes(req.user.userRank)) return res.status(403).json({ err: 2003 })

    next()
}

const isUserCustomer = (req, res, next) => {
    const accessedRanks = [
        'owner',
        'developer',
        'customer'
    ]

    if (!accessedRanks.includes(req.user.userRank)) return res.status(403).json({ err: 2003 })

    next()
}

module.exports = {
    isUserLoggedIn,
    isUserNotLoggedIn,
    isUserOwner,
    isUserAdmin,
    isUserSupporter,
    isUserEditor,
    isUserCustomer
}