let { Router } = require("express")
Router = new Router()

const { isUserNotLoggedIn } = require("../middlewares/jwt")

const registerController = require("../controllers/auth/registerController")
Router.post("/register", isUserNotLoggedIn, registerController.post)

const loginController = require("../controllers/auth/loginController")
Router.post("/login", isUserNotLoggedIn, loginController.post)

const submitOTPController = require("../controllers/auth/submitOTPController")
Router.post("/otp", isUserNotLoggedIn, submitOTPController.post)

module.exports = Router