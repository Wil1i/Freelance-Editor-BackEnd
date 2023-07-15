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
    },

    session: {
        type: DataTypes.TEXT,
        defaultValue: null
    }
})

const EditorsInformation = db.define("editorsinformations", {
    userId: {
        type: DataTypes.INTEGER
    },

    editedVideos: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },

    isAvailable: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})

EditorsInformation.hasMany(User, { as: "informations" })
User.belongsTo(EditorsInformation, {
    foreginKey: "userId",
    as: "informations"
})

User.sync()

module.exports = User