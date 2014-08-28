

var gulp = require('gulp');
var jade = require('gulp-jade');


gulp.task('template', function() {
  gulp.src('index.jade')
    .pipe(jade())
    .pipe(gulp.dest('_site/'))
});
