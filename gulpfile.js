

var gulp = require('gulp');
var clean = require('gulp-clean');
var webserver = require('gulp-webserver');
var jade = require('gulp-jade');
var less = require('gulp-less');

gulp.task('clean', function() {
  gulp.src('_site', { read: false })
    .pipe(clean());
});

gulp.task('template', function() {
  gulp.src('index.jade')
    .pipe(jade())
    .pipe(gulp.dest('_site'))
});

gulp.task('less', function() {
  gulp.src('assets/stylesheets/style.less')
    .pipe(less())
    .pipe(gulp.dest('_site'))
});

gulp.task('server', function() {
  gulp.src('_site')
    .pipe(webserver({
      livereload: true
    }));
});

gulp.task('watch', function() {
  gulp.watch('index.jade', ['template']);
  gulp.watch('assets/stylesheets/*', ['less']);
});

gulp.task('default', [
  'clean',
  'template',
  'less',
  'watch',
  'server'
]);
