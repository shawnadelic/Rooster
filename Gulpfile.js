var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  neat = require('node-neat').includePaths;

var paths = {
  scss: ['assets/sass/*.scss'],
  js: ['assets/js/*.js']
};

var prod = {
  styles: 'styles',
  scripts: 'scripts'
}

gulp.task('styles', function() {
  return gulp.src(paths.scss)
    .pipe(sass({
      includePaths: ['styles'].concat(neat)
    }))
    .pipe(gulp.dest('styles'));
});

gulp.task('scripts', function() {
  return gulp.src(paths.js)
    .pipe(uglify())
    .pipe(gulp.dest(prod.scripts));
});

gulp.task('watch', function() {
  gulp.watch(paths.scss, ['styles']);
  gulp.watch(paths.js, ['scripts']);
});

gulp.task('default', function() {
  gulp.start('styles');
  gulp.start('scripts');
});
