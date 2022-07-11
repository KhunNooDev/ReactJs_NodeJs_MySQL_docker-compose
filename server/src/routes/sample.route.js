const express = require('express');
const { getMultiple, getByPK, create, update, remove } = require('../controllers/sample.controller');
const router = express.Router();

router.get('/', getMultiple);
router.get('/:id', getByPK);
router.post('/', create);
router.patch('/:id', update);
router.delete('/:id', remove);

module.exports = router;
