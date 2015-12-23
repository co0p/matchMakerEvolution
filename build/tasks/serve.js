var gulp = require('gulp');
var browserSync = require('browser-sync');

var url = require('url');
var proxy = require('proxy-middleware');
var proxyOptions = url.parse('http://localhost:3000');
proxyOptions.route = '/api';

var middlewares = [];
middlewares.push(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
middlewares.push(proxy(proxyOptions));

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', ['build'], function(done) {
  browserSync({
    online: false,
    open: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware: middlewares
    }
  }, done);
});
