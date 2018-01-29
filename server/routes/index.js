
var express = require('express');
var router = express.Router();
var radon_controller = require('../controller/data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/insert', function(req, res, next){
  var radon_sensor = req.query.sensor_name || req.param.sensor_name || req.params.sensor_name;
  var radon_value = req.query.sensor_value || req.param.sensor_value || req.params.sensor_value;
  var radon_info = {
    name:radon_sesor,
    value:radon_value
  };
  radon_controller.insert(radon_info, function(row, err){
    if(row){

    }else if(err){

    }else{

    }
  });

});

router.get('/get', function(req, res, next){
  var radon_sensor = req.query.sensor_name || req.params.sensor_name || req.param.sensor_name;
  var radon_info = {
    name : radon_sensor
  };
  radon_controller.findlist(radon_info, function(row, err){
    if(row){

    }else if(err){

    }else{

    }
  });

});

module.exports = router;
