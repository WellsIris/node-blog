
/*
 * GET users listing.
 */

var models = require('../models')
	, User = models.User
	, config = require('../config').config;

exports.list = function(req, res){
	res.send("respond with a resource");
};

exports.sign = function (req, res){
	res.render('signup',{
		blog_name			: config.site_name
		, blog_description 	: config.site_description
	})
}



exports.signup = function(req, res){
	var user = new User({
		useremail 		: req.body.useremail
		, userpassword 	: req.body.password
	});
	console.log(user);
	user.save(function (err){
		if (err) {console.log('signup ERR');}
		res.send('signup success');
	});



	// var article = new Article({
	// 	title		: req.body.title
	// 	, content	: req.body.content
	// });
	// article.save(function (err){
	// 	if (err) console.log(err);
	// 	res.redirect('/');
	// });
}