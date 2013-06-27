
/*
 * GET home page.
 */
var config = require('../config').config
	, article = require('./article')
	, models = require('../models');



exports.index = function(req, res){
	models.Article.find({},function (err, result){
		res.render('index', { 
			blog_name			: config.site_name
			, blog_description 	: config.site_description
			, articles 			: result
		});
	});
};

exports.article = require('./article');
exports.user = require('./user');