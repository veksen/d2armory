var gulp = require('gulp'),
  runseq = require('gulp-sequence');

gulp.task('sass', function (done) {
  runseq(['clean-css', 'process-sass'], function () {
    done();
  });
});
