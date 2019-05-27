var express = require('express');
var router = express.Router();
var movieController = require('../../controller/movies');

router.get('/',     movieController.showMovieList);
router.get('/:id',  movieController.showMovieById);

module.exports = router;