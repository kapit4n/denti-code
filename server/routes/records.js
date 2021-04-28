var express = require('express');
var router = express.Router();

var recordCtrl = require('../controllers/records')

/* GET records listing. */
router.get('/', recordCtrl.list);
router.post('/', recordCtrl.create);
router.put('/:id', recordCtrl.update);
router.get('/:id', recordCtrl.getById);
router.delete('/:id', recordCtrl.delete);

module.exports = router;
