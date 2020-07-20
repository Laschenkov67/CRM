//Получить позицию в зависимости от категории
module.exports.getPositionByCategoryId = (req, res) => {
    res.status(200).json({
        login: true
    })
}

//Создание позиции
module.exports.createPosition = (req, res) => {
    res.status(200).json({
        register: 'from controller'
    })
}

//Обновление позиции
module.exports.updatePosition = (req, res) => {
    res.status(200).json({
        register: 'from controller'
    })
}

//Удаление позиции
module.exports.removePosition = (req, res) => {
    res.status(200).json({
        register: 'from controller'
    })
}
