

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var jade = require('gulp-jade');

gulp.task('template', function() {
  gulp.src('index.jade')
    .pipe(jade())
    .pipe(gulp.dest('_site/'))
});

gulp.task('server', function() {
  gulp.src('_site')
    .pipe(webserver());
});

gulp.task('watch', function() {
  gulp.watch('index.jade', ['template']);
});

gulp.task('default', [
  'watch',
  'template',
  'server'
]);
