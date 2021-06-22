const get = (req, res) => {
    res.send({ message: "listar todas as missoes" })
}

const post = (req, res) => {
    res.send({ message: "cadastrar uma missão" })
}

const update = (req, res) => {
    const { id } = req.params
    res.send({ message: `foi alterada a missão id ${id}`})
}

const remove = (req, res) => {
    const { id } = req.params
    res.send({ message: `foi deletado a missão id ${id}` })
}

module.exports = { get, post, update, remove }