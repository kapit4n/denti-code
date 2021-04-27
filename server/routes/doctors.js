var express = require('express');
var router = express.Router();

var doctorCtrl = require('../controllers/doctors')

/* GET doctors listing. */
router.get('/', doctorCtrl.list);
router.post('/', doctorCtrl.create);
router.put('/:id', doctorCtrl.update);
router.get('/:id', doctorCtrl.getById);
router.delete('/:id', doctorCtrl.delete);

module.exports = router;
