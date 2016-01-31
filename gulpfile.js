var gulp = require('gulp'),
    sass = require('gulp-sass')
    sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['watch']);

gulp.task('build-css', function(){
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function(){
  gulp.watch('./src/scss/**/*.scss', ['build-css']);
})
