var gulp = require('gulp'),
  paths = require('../gulp-paths.js'),
  path = require('path'),
  gutil = require('gulp-util'),
  rename = require('gulp-rename'),
  //rev = require('gulp-rev'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  uglify = require('gulp-uglify');

var filesToUse = [
  paths.bower + '/vue/dist/vue.min.js',
  paths.jsSrc + '/data/*',
  paths.jsSrc + '/main.js',
];

gulp.task('process-js', function () {
  var filename = 'main.min.js';

  gulp.src(filesToUse)
    .pipe(concat(filename))

    // TODO
    //.pipe(rev()) // Put version number on file

    .pipe(uglify({mangle: true}))
    .pipe(rename(filename))
    .pipe(gulp.dest(paths.jsDst))

    // TODO
    //.pipe(rev.manifest()) // Create a manifest of JS files
    //.pipe(rename('js.manifest.json')) // Save the name of the manifest file as "js.manifest.json";
    //.pipe(gulp.dest(paths.assets)) // And save my manifest file inside my assets folder (which I .gitnore the .json in that folder)

    .pipe(notify({
      title: 'Gulp',
      subtitle: 'success',
      message: filename + ' successfully processed!'
    }));
});