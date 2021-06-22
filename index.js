const express = require("express")
const server = express()
const mission = require("./services/mission")
const user = require("./services/user")
const port = 3000

server.get("/mission", mission.get)
server.post("/mission", mission.post)
server.put("/mission/:id", mission.update)
server.delete("/mission/:id", mission.remove)

server.get("/user", user.get)
server.post("/user", user.post)
server.put("/user/:id", user.update)
server.delete("/user/:id", user.remove)

server.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})

// 127.0.0.1:3000