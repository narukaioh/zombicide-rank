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
server.get("/mission", mission.get)
server.post("/mission", mission.post)
server.put("/mission/:id", mission.update)
server.delete("/mission/:id", mission.remove)

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

// 127.0.0.1:3000