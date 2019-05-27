var http = require('http');
var rp = require('request-promise');
// var config = require('../config');
// var common = require('../lib/common');
var movies = require('../resources/movies.json');

var locale = function(){
  var _showMovieList = function (req, res, next) {
    console.log("========무비 인덱스===========");
    res.send(movies);
  }   

  var _showMovieById = function (req, res, next) {
    var id = parseInt(req.params.id, 10);
    console.log("========무비 쇼=========== id:"+ id);
    var movie = movies.filter(function (movie) {
      return movie.id === id
    });
    console.dir(movie);
    res.send(movie)
  }    
  
    return {
      "showMovieList":_showMovieList,
      "showMovieById":_showMovieById,
    };
  }();
  
  module.exports = locale;
  