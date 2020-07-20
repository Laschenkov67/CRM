module.exports.getAllOrder = (req, res) => {
    res.status(200).json({
        login: true
    })
}

module.exports.createOrder = (req, res) => {
    res.status(200).json({
        register: 'from controller'
    })
}
