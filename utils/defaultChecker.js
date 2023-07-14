const User = require("../models/User")

const defaultChecker = async () => {
    const users = await User.findAll()
    if (!users[0]) await User.create({ username: "admin", password: "admin", number: "0", email: "admin@admin.com" })
}

module.exports = defaultChecker