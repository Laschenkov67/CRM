const express = require('express');
const categoryController = require('../controllers/categoryController');
const passport = require('passport');
const upload = require('../middleware/upload');
const router = express.Router();

router.get('/', passport.authenticate('jwt', {session: false}), categoryController.getAllCategories);
router.get('/:id', passport.authenticate('jwt', {session: false}), categoryController.getCategoryById);
router.post('/', passport.authenticate('jwt', {session: false}), upload.single('image'), categoryController.createCategory);
router.patch('/:id', passport.authenticate('jwt', {session: false}), upload.single('image'), categoryController.updateCategory);
router.delete('/:id', passport.authenticate('jwt', {session: false}), upload.single('image'), categoryController.removeCategory);

module.exports = router;
