var path = require('path');

var gulp = require('gulp'),
  gutil = require('gulp-util'),
  req = require('require-dir'),
  paths = require('./src/gulp-paths.js');

req('./src/gulp-tasks', {recurse: true});

gulp.task('default', ['sass', 'js']);

gulp.task('watch', function () {
  gulp.watch(paths.sass + '/**/*', ['sass']); // TODO: make sure it executes more than once http://stackoverflow.com/questions/29250016/gulp-watch-only-run-once
  gulp.watch(paths.jsSrc + '/**/*', ['js']);
});