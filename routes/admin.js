let { Router } = require("express")
Router = new Router()

const { isUserLoggedIn, isUserAdmin } = require("../middlewares/jwt")

const projectInformationController = require("../controllers/admin/projectInformationController")
Router.get("/project/information", isUserLoggedIn, isUserAdmin, projectInformationController.get)

const updateRankController = require("../controllers/admin/updateRankController")
Router.post("/user/rank", updateRankController.post)