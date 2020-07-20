module.exports.login = (req, res) => {
    res.status(200).json({
        login: true
    })
}

module.exports.signup = (req, res) => {
    res.status(200).json({
        register: 'from controller'
    })
}
