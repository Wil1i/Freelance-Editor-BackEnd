const User = require("../../models/User")

// TODO : send OTP when registered
const post = async (req, res) => {
    if (!req.body.password || !req.body.username || !req.body.firstName || !req.body.lastName || (!req.body.number && !req.body.email)) return res.status(400).json({ err: 2004 })

    if (await User.hasOne({ where: { username: req.body.username } })) return res.status(406).json({ err: 2007, msg: "نام کاربری وارد شده از قبل ثبت شده است." })

    if (req.body.number && await User.hasOne({ where: { number: req.body.number } })) return res.status(406).json({ err: 2007, msg: "شماره وارد شده از قبل ثبت شده است." })

    if (req.body.email && await User.hasOne({ where: { email: req.body.email } })) return res.status(406).json({ err: 2007, msg: "ایمیل وارد شده از قبل ثبت شده است." })

    await User.create({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password, // TODO : Encrypt password
        ...(req.body.number && { number: req.body.number }),
        ...(req.body.email && { email: req.body.email }),
        ...(req.body.userRank && { userRank: req.body.userRank }),
        verified: false
    })

    res.json({ ok: true })
}

module.exports = {
    post
}