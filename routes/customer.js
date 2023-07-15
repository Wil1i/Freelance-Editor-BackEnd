let { Router } = require("express")
Router = new Router

const { isUserLoggedIn, isUserCustomer } = require("../middlewares/jwt")

const availableEditorsController = require("../controllers/customer/availableEditorsController")
Router.get("/editors/available", isUserLoggedIn, isUserCustomer, availableEditorsController.get)

const ownedEditorsController = require("../controllers/customer/ownedEditorsController")
Router.get("/editors/owned", isUserLoggedIn, isUserCustomer, ownedEditorsController.get)

module.exports = Router