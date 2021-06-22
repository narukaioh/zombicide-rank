const express = require("express")
const cors = require("cors")
const server = express()
const mission = require("./services/mission")
const user = require("./services/user")
const auth = require("./services/auth")
const port = process.env.PORT || 3000

// configuration
server.use(cors())
server.use(express.urlencoded({ extended: false }));

// endpoint's list
server.get("/missions", mission.get)
server.get("/missions/:id", mission.getById)
server.post("/missions", mission.post)
server.put("/missions/:id", mission.update)
server.delete("/missions/:id", mission.remove)

server.get("/users", user.get)
server.get("/users/:id", user.getById)
server.post("/users", user.post)
server.put("/users/:id", user.update)
server.delete("/users/:id", user.remove)

server.get("/verify", auth.verify)
server.get("/login", auth.login)

server.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})
