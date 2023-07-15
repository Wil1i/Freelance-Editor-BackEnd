const User = require("../../models/User")

// TODO : handle OTP
const post = async (req, res) => {
    if (!req.body.username || (!req.body.email && !req.body.number)) return res.status(400).json({ err: 2004 })

    if (username) {

        const isUserFound = await User.findOne({ where: { username: req.body.username } })
        if (!isUserFound) return res.status(406).json({ err: 2008, msg: "کاربری با این نام پیدا نشد." })

    } else {
        const isUserFound = await User.findOne({
            where: {
                $or: [
                    {
                        email: req.body.email
                    },

                    {
                        number: req.body.number
                    }
                ]
            }
        })

        if (!isUserFound) return res.status(406).json({ err: 2008, msg: "کاربری با این " + (req.body.email) ? "ایمیل" : "شماره تلفن" + "پیدا نشد." })
    }

}

module.exports = {
    post
}