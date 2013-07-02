// Module dependencies.

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , stylus = require('stylus')
  , nib = require('nib')
  , config = require('./config').config;

var app = express();

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
    .use(nib());
}
// all environments
app.set('port', process.env.PORT || config.site_port);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.cookieSession({ cookie: { path: '/', httpOnly: true, maxAge: 1000000 }, secret: "keyboard cat" }));
app.use(app.router);
app.use(stylus.middleware({src:__dirname + '/public',compile:compile}));
app.use(express.static(path.join(__dirname, 'public')));

// development only

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Routes

app.get('/', routes.index);
app.get('/articles',routes.article.getAll);
app.get('/article/delete/:id',routes.article.del);
app.get('/sign',routes.user.sign);
app.get('/addnewarticle',routes.article.addnewartpage);
app.post('/signup',routes.user.signup);
app.post('/article/add', routes.article.add);
app.post('/article/update/:id', routes.article.update);
app.get('/users', user.list);
app.get('/sign/ajaxsignupcheckin',user.AJAX_signup_checkin);


http.createServer(app).listen(config.site_port, function(){
  console.log('Express server listening on port ' + config.site_port);
});
