let { Router } = require("express")
Router = new Router

const { isUserLoggedIn, isUserCustomer } = require("../middlewares/jwt")

const editorsController = require("../controllers/customer/editorsController")
Router.get("/editors", isUserLoggedIn, isUserCustomer, editorsController.get)

module.exports = Router