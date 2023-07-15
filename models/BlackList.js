const { DataTypes } = require("sequelize")

const db = require("../configs/db")

const BlackList = db.define("blacklists", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    token: {
        type: DataTypes.TEXT
    },

    userId: {
        type: DataTypes.TEXT
    }
})

BlackList.sync()

module.exports = BlackList