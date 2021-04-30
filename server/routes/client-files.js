var express = require('express');
var router = express.Router();

var clientFileCtrl = require('../controllers/client-files')

/* GET client-files listing. */
router.get('/', clientFileCtrl.list);
router.post('/', clientFileCtrl.create);
router.put('/:id', clientFileCtrl.update);
router.get('/:id', clientFileCtrl.getById);
router.delete('/:id', clientFileCtrl.delete);

module.exports = router;
