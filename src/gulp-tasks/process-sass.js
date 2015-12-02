var gulp = require('gulp'),
  paths = require('../gulp-paths.js'),
  gutil = require('gulp-util'),
  plumber = require('gulp-plumber'),
  notify = require('gulp-notify'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  //neat = require('node-neat'),
  autoprefix = require('gulp-autoprefixer'),
  mincss = require('gulp-minify-css'),
  rename = require('gulp-rename'),
  notify = require('gulp-notify'),
  //rev = require('gulp-rev'),
  //smap = require('gulp-sourcemaps'),
  size = require('gulp-size');

gulp.task('process-sass', function () {
  var filename = 'main.min.css';

  var onError = function (err) {
    notify.onError({
      title: "Gulp",
      subtitle: "Failure!",
      message: "Error: <%= error.message %>"
      //sound:    "Beep"
    })(err);

    this.emit('end');
  };

  var includePaths = [
    'sass',
    paths.sass
  ];
  //].concat(neat.includePaths);

  return gulp.src([paths.sass + '/main.scss'])
    .pipe(plumber({errorHandler: onError}))

    //.pipe(smap.init())

    //.pipe(notify({
    //	message: "Generated file <%= file.relative %>",
    //}))

    .pipe(sass({
      includePaths: includePaths,
      style: 'nested',
      sourceComments: true
    }))
    .pipe(autoprefix())
    .pipe(mincss())

    // TODO
    //.pipe(rev()) // Put version number on file

    //.on('error', notify.onError(function(error) {
    //	return "Error: " + error.message;
    //}))

    //.pipe(smap.write())

    .pipe(rename(filename))
    .pipe(gulp.dest(paths.css))
    .pipe(size())

    // TODO
    //.pipe(rev.manifest()) // Create a manifest of CSS files
    //.pipe(rename('css.manifest.json')) // Save the name of the manifest file as "css.manifest.json"
    //.pipe(gulp.dest(paths.assets)) // And save my manifest file inside my assets folder (which I .gitnore the .json in that folder)

    .pipe(notify({
      title: 'Gulp',
      subtitle: 'success',
      message: 'main.min.css successfully processed!'
    }));
});