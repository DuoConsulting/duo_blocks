"use strict";

/************************
 * SETUP
 ************************/

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');

/************************
 * CONFIGURATION
 ************************/

var autoReload = true;

var includePaths = [
  // require('node-normalize-scss').includePaths,
  // './node_modules/breakpoint-sass/stylesheets'
]

var rootDir = './'; 

var stylesSrc = [
  rootDir + '/**/scss/*.scss',
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
      browsers: ['last 2 versions', 'ie 11']
    }))
    .pipe(rename(function(path) {
        path.dirname += "/../css";
    }))
    .pipe(gulp.dest(rootDir))
    .pipe(livereload());
});

gulp.task('watch', function() {
  if (autoReload) {
    livereload.listen();
  }
  gulp.watch(stylesSrc, ['styles']);
});

gulp.task('default', ['styles']);
