const get = (req, res) => {
    res.send({ message: "listar todas os usario" })
}

const post = (req, res) => {
    res.send({ message: "cadastrar um usuario" })
}

const update = (req, res) => {
    const { id } = req.params
    res.send({ message: `foi alterado o usuario id ${id}`})
}

const remove = (req, res) => {
    const { id } = req.params
    res.send({ message: `foi deletado o usuario id ${id}` })
}

module.exports = { get, post, update, remove }