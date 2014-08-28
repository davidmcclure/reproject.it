

var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('template', function() {
  gulp.src('index.jade')
    .pipe(jade())
    .pipe(gulp.dest('_site/'))
});

gulp.task('watch', function() {
  gulp.watch('index.jade', ['template']);
});

gulp.task('default', [
  'watch',
  'template'
]);
