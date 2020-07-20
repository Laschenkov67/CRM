//Получить все категории
module.exports.getAllCategories = (req, res) => {
    res.status(200).json({
        login: true
    })
}

//Получить отдельную категорию по ID
module.exports.getCategoryById = (req, res) => {
    res.status(200).json({
        register: 'from controller'
    })
}

//Создать категорию
module.exports.createCategory = (req, res) => {
    res.status(200).json({
        register: 'from controller'
    })
}

//Обновить категорию
module.exports.updateCategory = (req, res) => {
    res.status(200).json({
        register: 'from controller'
    })
}

//Удалить категорию
module.exports.removeCategory = (req, res) => {
    res.status(200).json({
        register: 'from controller'
    })
}
