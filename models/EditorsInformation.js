const { DataTypes } = require("sequelize")

const db = require("../configs/db")

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

EditorsInformation.sync()

module.exports = EditorsInformation