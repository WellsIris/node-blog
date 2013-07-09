var fs = require('fs');

var config = fs.readFileSync('./config.json');
console.log(JSON.parse(config));
exports.config = JSON.parse(config);
