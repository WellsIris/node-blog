var config = require('../config').config
	, fs = require('fs')
	, article = require('./article')
	, models = require('../models')
	, async = require('async');

exports.admin = function (req, res) {
	if (req.session.username) {
		
	}
	res.render('dash_dashboard',{
		blog_name			: config.site_name
		, blog_description 	: config.site_description
		, username 			: req.session.username
	});
}


exports.renderSiteOption = function (req, res) {
	res.render('dash_siteOption',{config:config});
}

exports.siteOption = function (req, res) {
	var options = {
		site_name 			:req.body.site_name
		, site_author 		:req.body.meta_author
		, site_keywords 	:req.body.meta_keywords
		, site_description 	:req.body.meta_description
	};

	async.waterfall([
		function ( callback) {
			config.site_name		= options.site_name;
			config.site_author		= options.site_author;
			config.site_keywords	= options.site_keywords;
			config.site_description	= options.site_description;

			return callback(null, config);
		},
		function (config, callback){
			fs.writeFile('./config.json', JSON.stringify(config), function (err){
				if(err) throw err;
				return callback({success:true});
			});
		}
	],function (err, result) {
		res.redirect('/siteoption');
	});

	
}