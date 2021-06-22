const express = require("express")
const server = express()
const port = 3000

server.get("/mission", (req, res) => {
    res.send({ message: "listar todas as missoes" })
})

server.post("/mission", (req, res) => {
    res.send({ message: "cadastrar uma missão" })
})

server.put("/mission/:id", (req, res) => {
    const { id } = req.params
    res.send({ message: `foi alterada a missão id ${id}`})
})

server.delete("/mission/:id", (req, res) => {
    const { id } = req.params
    res.send({ message: `foi deletado a missão id ${id}` })
})

server.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})

// 127.0.0.1:3000