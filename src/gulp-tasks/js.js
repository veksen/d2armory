var gulp = require('gulp'),
  runseq = require('gulp-sequence');

gulp.task('js', function (done) {
  runseq(['lint-js', 'clean-js', 'process-js'], function () {
    done();
  });
});
