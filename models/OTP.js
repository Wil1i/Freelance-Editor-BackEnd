const { DataTypes } = require("sequelize")

const db = require("../configs/db")

const OTP = db.define("otps", {
    userId: {
        type: DataTypes.TEXT
    },

    code: {
        type: DataTypes.TEXT
    },

    mode: {
        type: DataTypes.TEXT
    }
})

OTP.sync()

module.exports = OTP