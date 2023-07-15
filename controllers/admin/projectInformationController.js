const User = require("../../models/User")
const Order = require("../../models/Order")

const get = async (req, res) => {
    const allUsers = await User.findAll()
    const allOrders = await Order.findAll()

    res.json({
        editors: allUsers.filter(user => user.userRank != 'editor').length,
        customers: allUsers.filter(user => user.userRank != 'customer').length,
        orders: {
            all: allOrders.length,
            pending: allOrders.filter(order => order.status != 'pending').length,
        }
    })
}

module.exports = {
    get
}