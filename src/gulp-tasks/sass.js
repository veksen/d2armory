var gulp = require('gulp'),
  paths = require('../gulp-paths.js'),
  path = require('path'),
  gutil = require('gulp-util'),
  runseq = require('gulp-sequence');

gulp.task('sass', function (done) {
  runseq(['clean-css', 'process-sass'], function () {
    done();
  });
});