var path = require('path');

var paths = {
  jsSrc:  './src/js',
  sass:   './src/scss',
  jsDst:  './public/assets/js',
  css:    './public/assets/css',
  fonts:  './public/assets/fonts',
  assets: './public/assets',
  bower:  './bower_components',
  base:   path.resolve(__dirname, '.')
}

module.exports = paths;