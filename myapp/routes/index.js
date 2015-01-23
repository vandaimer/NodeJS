var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var data = { title:'Express Title', srcImg : 'imgs/nodejs.png' }
	res.render('index', data);
});

module.exports = router;