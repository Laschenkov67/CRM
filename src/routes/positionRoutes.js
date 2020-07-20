const express = require('express');
const positionController =  require('../controllers/positionController');
const router = express.Router();

router.get('/:categoryId', positionController.getPositionByCategoryId);
router.post('/', positionController.createPosition);
router.patch('/:id', positionController.updatePosition);
router.delete('/:id', positionController.removePosition);

module.exports = router;
