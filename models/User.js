const { DataTypes } = require("sequelize")

const db = require("../configs/db")

const User = db.define("users", {
    id: {
        type: DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true
    },

    username: {
        type: DataTypes.TEXT,
    }
})