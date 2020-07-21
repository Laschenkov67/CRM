const Category = require('../models/Category');
const Position = require('../models/Position');
const errorHandler = require('../utils/errorHandler');

//Получить все категории
module.exports.getAllCategories = async function(req, res) {
    try {
        const categories = await Category.find({user: req.user.id})
        res.status(200).json(categories)
    } catch (e) {
        errorHandler(res, e)
    }
}

//Получить отдельную категорию по ID
module.exports.getCategoryById = async function(req, res) {
    try {
        const category = await Category.findById(req.params.id)
        res.status(200).json(category)
    } catch (e) {
        errorHandler(res, e)
    }
}

//Удалить категорию
module.exports.removeCategory = async function(req, res) {
    try {
        await Category.remove({_id: req.params.id})
        await Position.remove({category: req.params.id})
        res.status(200).json({
            message: 'Категория удалена.'
        })
    } catch (e) {
        errorHandler(res, e)
    }
}

//Создать категорию
module.exports.createCategory = async function(req, res) {
    const category = new Category({
        name: req.body.name,
        user: req.user.id,
        imageSrc: req.file ? req.file.path : ''
    })

    try {
        await category.save()
        res.status(201).json(category)
    } catch (e) {
        errorHandler(res, e)
    }
}

//Обновить категорию
module.exports.updateCategory = async function(req, res) {
    const updated = {
        name: req.body.name
    }

    if (req.file) {
        updated.imageSrc = req.file.path
    }

    try {
        const category = await Category.findOneAndUpdate(
            {_id: req.params.id},
            {$set: updated},
            {new: true}
        )
        res.status(200).json(category)
    } catch (e) {
        errorHandler(res, e)
    }
}
