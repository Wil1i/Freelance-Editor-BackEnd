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

    firstName: {
        type: DataTypes.TEXT
    },

    lastName: {
        type: DataTypes.TEXT
    },

    password: {
        type: DataTypes.TEXT
    },

    number: {
        type: DataTypes.TEXT,
        defaultValue: null
    },

    userRank: {
        type: DataTypes.TEXT,
        defaultValue: "customer"
    },

    email: {
        type: DataTypes.TEXT,
        defaultValue: null
    }
})

module.exports = User