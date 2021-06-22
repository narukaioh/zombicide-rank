const verify = (req, res) => {
    res.send("foi verificado!")
}

const login = (req, res) => {
    res.send({ token: "xxxx.xxxx.xxx"})
}

module.exports = { verify, login }