const User = require("../../models/User")

const get = async (req, res) => {
    const editors = await User.findAll({ where: { userRank: 'editor', include: ['informations'] } })

    const availableEditors = editors.filter(editor => !editor.informations.isAvailable)

    res.json(availableEditors)
}

module.exports = {
    get
}