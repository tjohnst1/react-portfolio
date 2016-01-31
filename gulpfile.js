var gulp = require('gulp'),
    sass = require('gulp-sass')
    sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['watch']);

gulp.task('build-css', function(){
  return gulp.src('app/src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/dist'));
});

gulp.task('watch', function(){
  gulp.watch('app/src/scss/**/*.scss', ['build-css']);
})
