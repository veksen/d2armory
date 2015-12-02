var gulp = require('gulp'),
  paths = require('../gulp-paths.js'),
  path = require('path'),
  gutil = require('gulp-util'),
  runseq = require('gulp-sequence');

gulp.task('js', function (done) {
  runseq(['clean-js', 'process-js'], function () {
    done();
  });
});