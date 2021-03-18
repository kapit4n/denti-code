var express = require('express');
var router = express.Router();

var userCtrl = require('../controllers/users')

/* GET users listing. */
router.get('/', userCtrl.list);
router.post('/', userCtrl.create);
router.put('/:id', userCtrl.update);
router.get('/:id', userCtrl.getById);
router.delete('/:id', userCtrl.delete);

module.exports = router;
