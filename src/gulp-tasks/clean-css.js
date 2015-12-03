var gulp = require('gulp'),
  paths = require('../gulp-paths.js'),
  del = require('del');

gulp.task('clean-css', function () {
  del([
    paths.css + '/*.*'
  ]);
});
