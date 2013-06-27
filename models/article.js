// article models 
var mongoose = require('mongoose')
	, Schema = mongoose.Schema
	, ArticleSchema = new Schema ({
		title		: String
		, content	: String
		, userID	: {type: String, default: ''}
		, auther	: {type: String, default: ''}		
		, className	: {type: String, default: ''}
		, tagName 	: {type: String, default: ''}
		, createTime: {type: Date, default	: new Date().getTime() }
	});

exports.Article = mongoose.model('Article',ArticleSchema);