var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/insert', function(req, res, next){
  var radon_sensor = req.query.sensor_name || req.param.sensor_name || req.params.sensor_name;
  var radon_value = req.query.sensor_value || req.param.sensor_value || req.params.sensor_value;
});

router.get('/get', function(req, res, next){
  var radon_sensor = req.query.sensor_name || req.params.sensor_name || req.param.sensor_name;
  
});

module.exports = router;
