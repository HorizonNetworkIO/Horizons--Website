var express = require('express');
var path = require('path');
var httpError = require('http-errors');
var cookieParser = require('cookie-parser');
var config = require('./config');
var cors = require('cors')
var http = require('http');

var indexRouter = require('./routes/index');

class WebApp {
    constructor() {
        this.app = express();
        this.Setup();
    }

    Setup() {
        // this.app.set('view engine', 'jade');
        // this.app.set('views', path.join(__dirname, 'views'));

        this.app.use(express.static(path.join(__dirname, 'public')));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cookieParser());

        // if (config.debugLogging) {
        //     var logger = require('morgan');
        //     this.app.use(logger('dev'));
        // }

        this.app.use(cors())

        this.app.use("/", indexRouter);
        
        this.app.use(function(req, res, next) {
            next(httpError(404));
        });
        
        this.app.use(function(err, req, res) {
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};
        
            res.status(err.status || 500);
            res.render('error');
        });

        this.port = normalizePort(process.env.PORT || '443' || '80');
        this.app.set('port', this.port);
        
        this.server = http.createServer(this.app);
        this.server.listen(this.port);
    }
}

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

var app = new WebApp();

module.exports = app;