var http = require('http');
var rp = require('request-promise');
var config = require('../config');
// var common = require('../lib/common');

var member = function(){
  var _showMemberList = function (req, res, next) {
    var options = {
        method: 'GET',
        uri: config.baseUrl+'/member',
        json: true
      };

      rp(options)
      .then(function (parsedBody) {
        var list = parsedBody.values;
        console.log(list);
        res.send(list);
      })
      .catch(function (err) {
        res.send(err);
      });
      
  }   

  var _showMemberById = function (req, res, next) {
    var options = {
        method: 'GET',
        uri: config.baseUrl+'/member/' + req.params.id,
        json: true
      };

      rp(options)
      .then(function (parsedBody) {
        var result = parsedBody.values;
        console.log(result);
        res.send(result);
      })
      .catch(function (err) {
        res.send(err);
      });
  }    
  
  var _memberCreate = function(req, res, next) {console.log("123");
    var options = {
      // headers: {
      //   'access-token': req.session.token
      // },
      method: 'POST',
      uri: config.baseUrl+'/member',
      body: req.body,
      json: true
    };      
    console.log(options);

    rp(options)
      .then(function (parsedBody) {
        
        res.json({
          "msg":"Success"
        })
      })
      .catch(function (err) {
        res.json({
          "msg":"Fail"
        })
      });
  }
  
    return {
      "showMemberList":_showMemberList,
      "showMemberById":_showMemberById,
      "memberCreate":_memberCreate,
    };
  }();
  
  module.exports = member;
  