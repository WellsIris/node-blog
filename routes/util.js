/**
 * express.js return json
 */
exports.returnJSON = function( res, result){
	res.writeHead(200,{'Content-Type': 'application/json'});
	var value = JSON.stringify(result) || '';
	res.write(value);
	res.end();
}