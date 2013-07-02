
/*
 * GET home page.
 */
var config = require('../config').config
	, article = require('./article')
	, models = require('../models')
	, moment = require('moment');



exports.index = function(req, res){
	models.Article.find({},{},{sort: [['_id', -1]]},function (err, result){
		console.log(req.session.username);
		res.render('index', { 
			blog_name			: config.site_name
			, blog_description 	: config.site_description
			, articles 			: result
			, username 			: req.session.username
		});
	});
};

exports.article = require('./article');
exports.user = require('./user');