var mongoose = require('mongoose')
	, Schema = mongoose.Schema
	, UserSchema = new Schema({
		userID 		: String
		, userName 	: String
		, password 	: String
		, userEmail : String
	}); 

mongoose.model('User' , UserSchema);