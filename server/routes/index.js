var express = require('express');
var router = express.Router();
var radon_controller = require('../controller/data');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/insertdata', function(req, res, next) {
    var radon_sensor = req.query.sensor_name || req.param.sensor_name || req.params.sensor_name;
    var radon_value = req.query.sensor_value || req.param.sensor_value || req.params.sensor_value;
    var radon_info = {
        name: radon_sesor,
        value: radon_value
    };
    radon_controller.insert(radon_info, function(row, err) {
        if (row) {
            console.log('insert data : ', row);
            res.redirect('/');
        } else if (err) {
            console.log('error : ', err);
            res.status(500);

        } else {
            console.log('null');
            res.status(404);

        }
    });

});

router.get('/getdata', function(req, res, next) {
    var radon_sensor = req.query.sensor_name || req.params.sensor_name || req.param.sensor_name;
    var radon_info = {
        name: radon_sensor
    };
    radon_controller.findlist(radon_info, function(row, err) {
        if (row) {
            console.log('find list : ', row);
            res.json(row);
        } else if (err) {
            console.log('error : ', err);
            res.json(err);
        } else {
            console.log('null');
            res.json('null');
        }
    });

});

router.get('get', function(req, res, next) {

});

module.exports = router;