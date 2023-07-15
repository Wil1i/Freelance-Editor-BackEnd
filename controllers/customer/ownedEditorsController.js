const User = require("../../models/User")
const Order = require("../../models/Order")

const get = async (req, res) => {
    const orders = await Order.findAll({ where: { customerId: req.user.id } })

    // TODO : map editors informations and add it to response

    res.json({})
}

module.exports = {
    get
}