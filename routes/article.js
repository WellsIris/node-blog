
/**
 * Article Route Modules
 */


var models = require('../models')
	, Article = models.Article
	, config = require('../config').config;



// 增加新文章
exports.add = function (req, res){
	var article = new Article({
		title		: req.body.title
		, content	: req.body.content
	});
	article.save(function (err){
		if (err) console.log(err);
		res.redirect('/');
	});
}



// 删除文章
exports.del = function (req, res){
	if (req.params) {console.log(req.params)}
	Article.remove({'_id':req.param('id')},function (err){
		res.send(err ? 'ERR' + err : 'Delete article success!');		
	});
}



// 修改文章
exports.update = function (req, res){
	var article = {
		id 			: req.body.id
		, title		: req.body.title
		, content	: req.body.content
	};

	Article.update({'_id':article.id},{ $set :{
		title 		: article.title
		, content 	: article.content
	}},false,function (err, num){
		if (err) {
			console.log(err);
			res.send('update article ERR:' + err );
		} else {
			res.send(num + 'article update success!');
		}		
	});
}




/**
 * get all article data by JSON
 */

exports.getAll = function (req, res){
	console.log('getAll is invoke !');
	if (req.param('id')) {
		Article.findOne({'_id':req.param('id')},function (err, result){ res.json(result)});
	} else {
		Article.find( {}, function (err, result){ res.json(result)});
	}
	console.log('getAll invoke success');
}


exports.addnewartpage = function (req, res){
	res.render('article_editer');
}


