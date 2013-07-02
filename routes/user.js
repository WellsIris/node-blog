
/*
 * GET users listing.
 */

var models = require('../models')
	, util = require('./util')
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
	var Reg_email 		= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
		, Reg_password 	= /^\w+$/
		, useremail 	= req.body.useremail
		, password 		= req.body.password
		, checked 		= Reg_email.test(useremail) && Reg_password.test(password);
	console.log('checked:' + checked);
	if (checked) {
		User.findOne({'userEmail': useremail},{},function (err, result){
			if(err) console.log(err);
			if (result === null) {
				var user = new User({
					userEmail 	: useremail
					, password 	: password
				});
				user.save(function(err){
					if (err) console.log(err);
					req.session.username = useremail;
					res.redirect('/');
				});
			}else{
				console.log('ERR: This email is occupancy')
				res.send('Sorry , this email is occupancy');
			}
		});
	} else {
		res.send('can\'t signup');
	}
}

exports.loginrender = function(req, res){
	
}


/*
 * return : 返回该邮箱是否已经被注册
 */
exports.AJAX_signup_checkin = function(req, res){
	var useremail 	= req.query.useremail;
		User.findOne({'userEmail': useremail},{},function (err, result){
			if(err) console.log(err);
			checked = result===null ? true : false;
			res.json({cansignin:checked});
		});

}






