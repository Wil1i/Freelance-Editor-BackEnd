const User = require("../../models/User")

const { ranks } = require("../../configs/config.json")

const post = async (req, res) => {
    if (!req.body.id || !req.body.rank) return res.status(400).json({ err: 2004 })
    if (!ranks.includes(req.body.rank)) return res.status(400).json({ err: 2006 })

    const findUser = await User.findByPk(req.body.id)
    if (!findUser) return res.status(404).json({ err: 2005 })

    if (
        ranks.indexOf(req.user.userRank) >= ranks.indexOf(req.body.rank)
        || ranks.indexOf(req.user.userRank) >= ranks.indexOf(findUser.userRank)
    ) return res.status(403).json({ err: 2003 })

    await findUser.update({ userRank: req.body.rank })

    res.json({ user: findUser })
}

module.exports = {
    post
}