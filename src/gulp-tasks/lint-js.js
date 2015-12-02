var gulp = require('gulp'),
  paths = require('../gulp-paths.js'),
// plumber = require('gulp-plumber'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  eslint = require('gulp-eslint'),

  filesToUse = [
    paths.jsSrc + '/data/*',
    paths.jsSrc + '/main.js'
  ];

gulp.task('lint-js', function () {
  return gulp.src(filesToUse)

    .pipe(eslint())
    .pipe(eslint.format());
    // .pipe(eslint.failOnError())
});
