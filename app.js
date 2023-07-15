const express = require("express")
const bodyParser = require("body-parser")

const config = require("./configs/config.json")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const adminRoutes = require("./routes/admin")
app.use("/admin", adminRoutes)

const customerRoutes = require("./routes/customer")
app.use("/customer", customerRoutes)

const routes = require("./routes/index")
app.use("/", routes)

app.listen(config.app.port || 3000, () => {
    console.log(`App is running on port ${config.app.port || 3000}`)
})