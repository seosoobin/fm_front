var express = require('express');
var router = express.Router();
var memberController = require('../../controller/member');

router.get ('/',            memberController.showMemberList);
router.post('/',            memberController.memberCreate);
router.get ('/:id',         memberController.showMemberById);

module.exports = router;