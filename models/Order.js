const { DataTypes } = require("sequelize")

const db = require("../configs/db")

const Order = db.define("orders", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    customerId: {
        type: DataTypes.INTEGER
    },

    editorId: {
        type: DataTypes.INTEGER
    },

    amount: {
        type: DataTypes.INTEGER
    },

    video: {
        type: DataTypes.TEXT
    },

    status: {
        type: DataTypes.TEXT
    }
})

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

// ? Customer things call with orders and editors things call with projects

User.hasMany(Order, { as: "orders" })
User.belongsTo(EditorsInformation, {
    foreginKey: "customerId",
    as: "orders"
})

User.hasMany(Order, { as: "projects" })
User.belongsTo(EditorsInformation, {
    foreginKey: "editorId",
    as: "projects"
})

// TODO: Have access to editor and customer informations

module.exports = Order