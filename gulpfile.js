"use strict";

/************************
 * SETUP
 ************************/

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');

/************************
 * CONFIGURATION
 ************************/

var autoReload = true;

var includePaths = [
  // require('node-normalize-scss').includePaths,
  // './node_modules/breakpoint-sass/stylesheets'
]

var stylesSrc = [
  './theme/scss/**/*.scss'
];

/************************
 * TASKS
 ************************/

gulp.task('styles', function() {
  gulp.src(stylesSrc)
    .pipe(sass({
      includePaths: includePaths,
      outputStyle: 'expanded',
      sourceComments: true
    }))
    // Catch any SCSS errors and prevent them from crashing gulp
    .on('error', function (error) {
      console.error(error);
      this.emit('end');
    })
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'iOS 7', 'ie 11']
    }))
    .pipe(gulp.dest('./theme/css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  if (autoReload) {
    livereload.listen();
  }
  gulp.watch('./theme/scss/**/*.scss', ['styles']);
});

gulp.task('default', ['styles']);
