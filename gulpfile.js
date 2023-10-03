const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');

function compileSass() {
  return gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('css'));
}

function watch() {
  gulp.watch('scss/style.scss', compileSass);
}

exports.default = gulp.series(compileSass, watch);
