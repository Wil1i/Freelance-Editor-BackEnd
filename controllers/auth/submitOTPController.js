const User = require("../../models/User")
const OTP = require("../../models/OTP")

const post = async (req, res) => {
    if (!req.body.code || (req.query.mode == "login" && !req.body.password) && (!req.body.username && !req.body.email && !req.body.number)) return res.status(400).json({ err: 2004 })

    const findUser = await User.findOne({
        where: {
            $or: [
                {
                    email: req.body.email
                },
                {
                    number: req.body.number
                },
                {
                    username: req.body.username
                }
            ]
        }
    })

    if (!findUser) return res.status(406).json({ err: 2008 })

}

module.exports = {
    post
}