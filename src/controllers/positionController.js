const Position = require('../models/Position');
const errorHandler = require('../utils/errorHandler');

//Получить позицию в зависимости от категории
module.exports.getPositionByCategoryId = async function(req, res) {
    try {
        const positions = await Position.find({
            category: req.params.categoryId,
            user: req.user.id
        })
        res.status(200).json(positions)
    } catch (e) {
        errorHandler(res, e)
    }
}

//Создание позиции
module.exports.createPosition = async function(req, res) {
    try {
        const position = await new Position({
            name: req.body.name,
            cost: req.body.cost,
            category: req.body.category,
            user: req.user.id
        }).save()
        res.status(201).json(position)
    } catch (e) {
        errorHandler(res, e)
    }
}

//Удаление позиции
module.exports.removePosition = async function(req, res) {
    try {
        await Position.remove({_id: req.params.id})
        res.status(200).json({
            message: 'Позиция была удалена.'
        })
    } catch (e) {
        errorHandler(res, e)
    }
}

//Обновление позиции
module.exports.updatePosition = async function(req, res) {
    try {
        const position = await Position.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        )
        res.status(200).json(position)
    } catch (e) {
        errorHandler(res, e)
    }
}

