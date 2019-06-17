var express = require('express');
var router = express.Router();
var memberController = require('../../controller/member');
var teamController = require('../../controller/team');

router.get ('/',                        teamController.showTeamList);
router.get ('/:id/member',              memberController.showMemberList);
router.post('/:id/member',              memberController.memberCreate);
router.get ('/:id/member/:mid',         memberController.showMemberById);

module.exports = router;