const { DataTypes } = require("sequelize")

const db = require("../configs/db")

const User = db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    username: {
        type: DataTypes.TEXT,
    },

    password: {
        type: DataTypes.TEXT
    },

    number: {
        type: DataTypes.TEXT
    },

    email: {
        type: DataTypes.TEXT
    }
})

module.exports = User