const { User } = require('../../models');

const get = (req, res) => {
    res.send({ message: "listar todas os usario" })
}

const getById = (req, res) => {
    res.send({ message: `listar todas os usario ${id}` })
}

const post = (req, res) => {
    const { name, email, password } = req.body
    User.create({ name, email, password });
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

module.exports = { get, getById, post, update, remove }